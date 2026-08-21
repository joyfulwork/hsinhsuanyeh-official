// Re-encode public/assets/images in place. Idempotent: a second run finds
// nothing left to save, so it is safe to re-run after dropping new assets in.
// Dry run by default; pass --apply to write.
//
// Per-file policy, because one setting does not fit an art portfolio:
//   jpeg              cap the long edge, re-encode at q82 4:4:4
//   png w/ real alpha treat as a graphic, quantize to a 256-colour palette
//   png holding a photo  cap + recompress only (see convert-png-photos.mjs)
//   animated gif      re-encode with a reduced palette, never flatten
import sharp from 'sharp'
import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

const DIR = 'public/assets/images'
const APPLY = process.argv.includes('--apply')

// Full-bleed art and project heroes are the only images that ever paint wide;
// everything else sits in a masonry column or thumbnail strip under ~700px.
const FULL_BLEED = /^(home-|vr-broccoli|vr-badge|vr-flower|vr-pig)|-hero\.[a-z]+$/
const MAX_EDGE_FULL = 2000
const MAX_EDGE_INLINE = 1400
// 4:4:4 throughout: this is illustration and animation art, and 4:2:0 bleeds
// colour across the hard edges in it
const JPEG = { quality: 82, mozjpeg: true, chromaSubsampling: '4:4:4' }
const MIN_SIZE = 40 * 1024

const fmt = (b) => (b / 1048576).toFixed(2) + 'MB'

// A PNG whose alpha channel is effectively opaque is a photo someone saved as
// PNG — quantizing it would band. Only genuinely cut-out art gets a palette.
async function hasRealTransparency(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  for (let i = info.channels - 1; i < data.length; i += info.channels) {
    if (data[i] < 250) return true
  }
  return false
}

const files = (await readdir(DIR)).sort()
let before = 0, after = 0, changed = 0, skipped = 0
const wins = []

for (const f of files) {
  const p = path.join(DIR, f)
  const st = await stat(p)
  if (!st.isFile()) continue
  const ext = path.extname(f).toLowerCase()
  before += st.size

  if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext) || st.size < MIN_SIZE) {
    after += st.size; skipped++; continue
  }

  const animated = ext === '.gif'
  const input = await readFile(p)
  const meta = await sharp(input, { animated }).metadata()
  const cap = FULL_BLEED.test(f) ? MAX_EDGE_FULL : MAX_EDGE_INLINE
  let buf

  if (animated) {
    // frame height is stacked in metadata.height for animated input; never resize
    buf = await sharp(input, { animated: true }).gif({ colours: 128, effort: 10 }).toBuffer()
  } else {
    let pipe = sharp(input, { failOn: 'none' })
    if (Math.max(meta.width, meta.height) > cap) {
      pipe = pipe.resize({
        width: meta.width >= meta.height ? cap : undefined,
        height: meta.height > meta.width ? cap : undefined,
        fit: 'inside',
        withoutEnlargement: true,
      })
    }
    if (ext === '.png') {
      const graphic = meta.hasAlpha && (await hasRealTransparency(input))
      pipe = pipe.png({ compressionLevel: 9, effort: 10, palette: graphic, colors: 256 })
    } else {
      pipe = pipe.jpeg(JPEG)
    }
    buf = await pipe.toBuffer()
  }

  // Require a real win. Without this an already-optimised file still re-encodes
  // a percent smaller each run, so repeat runs would quietly compound JPEG
  // generation loss.
  if (buf.length >= st.size * 0.95) { after += st.size; skipped++; continue }

  after += buf.length
  changed++
  wins.push({ f, from: st.size, to: buf.length, capped: !animated && Math.max(meta.width, meta.height) > cap })

  if (APPLY) await writeFile(p, buf)
}

wins.sort((a, b) => (b.from - b.to) - (a.from - a.to))
console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'} — ${changed} re-encoded, ${skipped} left alone`)
console.log(`${fmt(before)} -> ${fmt(after)}  (saves ${fmt(before - after)}, ${((1 - after / before) * 100).toFixed(0)}%)`)
console.log('\nBiggest savings:')
for (const w of wins.slice(0, 10)) {
  console.log(`  ${fmt(w.from)} -> ${fmt(w.to)}  ${w.f}${w.capped ? ' (capped)' : ''}`)
}
