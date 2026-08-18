// ponytail: throwaway comparison tool, not shipped — flat script, no framework
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import fs from 'node:fs';
import path from 'node:path';

const LIVE_BASE = 'https://www.hsinhsuanyeh.com';
const LOCAL_BASE = process.env.LOCAL_BASE || 'http://localhost:5174';
const OUT_DIR = process.env.DIFF_OUT || 'C:/Users/Wade_TPE/AppData/Local/Temp/claude/C--Users-Wade-TPE-Documents-hsinhsuanyeh-official/9cccb514-3c99-4f55-87f7-370f74f3862b/scratchpad/visual-diff';

const ROUTES = [
  { key: 'home', en: '/', zh: '/zh/' },
  { key: 'animation', en: '/animation/', zh: '/zh/animation/' },
  { key: 'ashes', en: '/animation/ashes/', zh: '/zh/animation/ashes/' },
  { key: 'doitagain', en: '/animation/doitagain/', zh: '/zh/animation/doitagain/' },
  { key: 'vr', en: '/vr/', zh: '/zh/vr/' },
  { key: 'vr-son', en: '/vr-son/', zh: '/zh/vr-son/' },
  { key: 'illustration', en: '/illustration/', zh: '/zh/illustration/' },
  { key: 'summer-secrets', en: '/illustration/summer-secrets/', zh: '/zh/illustration/summer-secrets/' },
  { key: 'comics', en: '/comics/', zh: '/zh/comics/' },
  { key: 'comeout', en: '/comics/comeout/', zh: '/zh/comics/comeout/' },
  { key: 'about-contact', en: '/about-contact/', zh: '/zh/about-contact/' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 834, height: 1194 },
  { name: 'mobile', width: 390, height: 844 },
];

fs.mkdirSync(OUT_DIR, { recursive: true });

function readPng(file) {
  return PNG.sync.read(fs.readFileSync(file));
}

// pads both images to the same (max) canvas size so pixelmatch can run; returns { diffPixels, totalPixels, heightDeltaPx }
function diffImages(liveFile, localFile, diffFile) {
  const a = readPng(liveFile);
  const b = readPng(localFile);
  const width = Math.max(a.width, b.width);
  const height = Math.max(a.height, b.height);
  const pad = (img) => {
    if (img.width === width && img.height === height) return img;
    const out = new PNG({ width, height });
    PNG.bitblt(img, out, 0, 0, img.width, img.height, 0, 0);
    return out;
  };
  const pa = pad(a);
  const pb = pad(b);
  const diff = new PNG({ width, height });
  const diffPixels = pixelmatch(pa.data, pb.data, diff.data, width, height, { threshold: 0.15 });
  fs.writeFileSync(diffFile, PNG.sync.write(diff));
  return {
    diffPixels,
    totalPixels: width * height,
    heightDeltaPx: Math.abs(a.height - b.height),
    liveSize: `${a.width}x${a.height}`,
    localSize: `${b.width}x${b.height}`,
  };
}

async function shoot(page, url, viewport, file) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(800); // let scroll-reveal/marquee settle
  await page.screenshot({ path: file, fullPage: true });
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const results = [];

  for (const route of ROUTES) {
    for (const lang of ['en', 'zh']) {
      const relPath = route[lang];
      for (const vp of VIEWPORTS) {
        const tag = `${route.key}-${lang}-${vp.name}`;
        const liveFile = path.join(OUT_DIR, `${tag}.live.png`);
        const localFile = path.join(OUT_DIR, `${tag}.local.png`);
        const diffFile = path.join(OUT_DIR, `${tag}.diff.png`);
        try {
          await shoot(page, LIVE_BASE + relPath, vp, liveFile);
          await shoot(page, LOCAL_BASE + relPath, vp, localFile);
          const r = diffImages(liveFile, localFile, diffFile);
          const pct = ((r.diffPixels / r.totalPixels) * 100).toFixed(2);
          results.push({ tag, path: relPath, viewport: vp.name, diffPct: pct, ...r });
          console.log(`${tag.padEnd(30)} diff=${pct}%  live=${r.liveSize} local=${r.localSize}`);
        } catch (err) {
          results.push({ tag, path: relPath, viewport: vp.name, error: String(err) });
          console.log(`${tag.padEnd(30)} ERROR ${err}`);
        }
      }
    }
  }

  await browser.close();
  results.sort((a, b) => (parseFloat(b.diffPct) || 0) - (parseFloat(a.diffPct) || 0));
  fs.writeFileSync(path.join(OUT_DIR, 'report.json'), JSON.stringify(results, null, 2));
  console.log('\n--- worst offenders ---');
  results.slice(0, 15).forEach((r) => console.log(r.tag, r.diffPct + '%', r.error || ''));
  console.log(`\nFull report: ${path.join(OUT_DIR, 'report.json')}`);
}

main();
