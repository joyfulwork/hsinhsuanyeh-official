// Some source assets are photographs saved as PNG — PNG stores them 5-8x larger
// than JPEG and they gain nothing from it, because their alpha channel is fully
// opaque. Convert those to JPEG and rewrite the references.
// Dry run by default; pass --apply to write.
import sharp from 'sharp'
import { readFile, writeFile, unlink, stat } from 'node:fs/promises'
import path from 'node:path'

const DIR = 'public/assets/images'
const SOURCES = ['src/data/projects.js', 'src/data/wix-home.js', 'scripts/extract-wix-home.mjs']
const APPLY = process.argv.includes('--apply')
// same tiers as optimize-images.mjs
const FULL_BLEED = /^(home-|vr-broccoli|vr-badge|vr-flower|vr-pig)|-hero$/
const CAP_FULL = 2000
const CAP_INLINE = 1400

const NAMES = [
  'anim-ws2-gallery-02', 'vr-son-scene-01', 'anim-samuelsdrink-hero',
  'anim-ws2-gallery-01', 'anim-police-hero', 'anim-yanto-hero',
  'vr-animalspirits-bubble', 'capture00005',
]

const kb = (b) => (b / 1024).toFixed(0) + 'KB'
let from = 0, to = 0
const done = []

for (const name of NAMES) {
  const src = path.join(DIR, name + '.png')
  let st
  try { st = await stat(src) } catch { console.log(`  skip ${name}.png (missing)`); continue }
  const input = await readFile(src)
  const meta = await sharp(input).metadata()

  // refuse to flatten anything that is actually using its alpha channel
  if (meta.hasAlpha) {
    const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
    let transparent = false
    for (let i = info.channels - 1; i < data.length; i += info.channels) {
      if (data[i] < 250) { transparent = true; break }
    }
    if (transparent) { console.log(`  REFUSED ${name}.png — real transparency`); continue }
  }

  const cap = FULL_BLEED.test(name) ? CAP_FULL : CAP_INLINE
  let pipe = sharp(input).flatten({ background: '#ffffff' })
  if (Math.max(meta.width, meta.height) > cap) {
    pipe = pipe.resize({
      width: meta.width >= meta.height ? cap : undefined,
      height: meta.height > meta.width ? cap : undefined,
      fit: 'inside', withoutEnlargement: true,
    })
  }
  const buf = await pipe.jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer()

  // flat colour art can encode larger as JPEG than as a palette PNG
  if (buf.length >= st.size) { console.log(`  kept as PNG ${name} (JPEG would be bigger)`); continue }

  from += st.size; to += buf.length
  done.push({ name, from: st.size, to: buf.length })
  if (APPLY) {
    await writeFile(path.join(DIR, name + '.jpg'), buf)
    await unlink(src)
  }
}

let rewrites = 0
for (const f of SOURCES) {
  let text = await readFile(f, 'utf8')
  const original = text
  for (const { name } of done) text = text.split(`${name}.png`).join(`${name}.jpg`)
  if (text !== original) { rewrites++; if (APPLY) await writeFile(f, text) }
}

console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'} — ${done.length} converted, ${rewrites} source files rewritten`)
for (const d of done) console.log(`  ${kb(d.from)} -> ${kb(d.to)}  ${d.name}.png -> .jpg`)
console.log(`total ${kb(from)} -> ${kb(to)} (saves ${kb(from - to)})`)
