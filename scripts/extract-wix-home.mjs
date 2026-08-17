import fs from 'node:fs'
import path from 'node:path'

const htmlPath = process.argv[2]
const outPath = process.argv[3]
const html = fs.readFileSync(htmlPath, 'utf8')
const page = html.match(/<style id="css_jsa1g">([\s\S]*?)<\/style>/)?.[1] || ''
const comp = html.match(/<style id="compCssMappers_jsa1g">([\s\S]*?)<\/style>/)?.[1] || ''

function rulesFor(id) {
  const meshRe = new RegExp(`\\[id="${id}"\\][^{]*\\{([^}]+)\\}`, 'g')
  const mesh = [...page.matchAll(meshRe)].map((m) => m[1].trim())
  const compRe = new RegExp(`#${id}\\{([^}]+)\\}`, 'g')
  const compRules = [...comp.matchAll(compRe)].map((m) => m[1].trim())
  return [...mesh, ...compRules]
}

function parseMask(rules) {
  const maskRule = rules.find((r) => r.includes('--mask-image'))
  if (!maskRule) return null
  const match = maskRule.match(/--mask-image:url\(([^)]+)\)/)
  if (!match) return null
  const raw = match[1].replace(/^["']|["']$/g, '')
  // Keep Wix URL-encoded data URI; only strip wrapping quotes.
  return raw.trim()
}

function parseSize(rules) {
  const w = rules.find((r) => r.includes('--width:'))?.match(/--width:(\d+)px/)?.[1]
  const h = rules.find((r) => r.includes('--height:'))?.match(/--height:(\d+)px/)?.[1]
  return { width: w ? Number(w) : null, height: h ? Number(h) : null }
}

function parsePos(rules) {
  const pos = rules.find((r) => r.includes('left:') || r.includes('margin'))
  const left = pos?.match(/left:(\d+)px/)?.[1]
  const top = pos?.match(/top:(\d+)px/)?.[1]
  const marginTop = pos?.match(/margin:([^;]+)/)?.[1]
  return { left: left ? Number(left) : null, top: top ? Number(top) : null, margin: marginTop || null }
}

const TOP_PCT = {
  'comp-m1qdvj3s': 1.6,
  'comp-m1qfat47': 1.4,
  'comp-m1qdtqns': 1.2,
  'comp-m1qdsezx': 23.9,
  'comp-m1qdre76': 6.6,
  'comp-m1qextto': 52.1,
  'comp-m1qfd6fc': 70.3,
}

const bubbles = [
  { id: 'comp-m1qdvj3s', href: '/comics/comeout/', image: 'd18541_a11eaa4e35964183b165ef4d918c2dfd~mv2.jpg', alt: "Why don't you come out" },
  { id: 'comp-m1qfat47', href: '/illustration/summer-secrets/', image: 'd18541_b9a05047f7fa41f985b933c89545a16a~mv2.jpg', alt: 'Summer Secrets' },
  { id: 'comp-m1qdtqns', href: '/vr-son/', image: 'd18541_73998acfecbc43f3bf71ffe35a56feb8~mv2.jpg', alt: 'Sense Of Nowhere' },
  { id: 'comp-m1qdsezx', href: '/animation/doitagain/', image: 'd18541_96bf74b6144b40bcb0a5265b80abfc5d~mv2.jpg', alt: 'DO IT AGAIN' },
  { id: 'comp-m1qdre76', href: '/animation/ashes/', image: 'd18541_840144796ab94fa3af333100d9fb5822~mv2.jpg', alt: 'Ashes' },
  { id: 'comp-m1qextto', static: true, image: 'd18541_96e7be12865743b3853b0abfdf81cecc~mv2.png', alt: 'Animal Spirits VR', fallback: 'capture00005.png' },
  { id: 'comp-m1qfd6fc', static: true, image: 'd18541_fffbaf53c65344d087a1af48b3abe42c~mv2.jpg', alt: 'Lemon' },
]

const SITE_WIDTH = 980

const home = {
  siteWidth: SITE_WIDTH,
  badge: {
    left: 454,
    marginTop: 61,
    image: 'd18541_611580096f15491894d65dd42c30de65~mv2.png',
    hoverImage: 'd18541_bdbf8a992eb4480d8d81cdd88040cfa8~mv2.png',
    href: '/vr-son/',
  },
  pig: 'd18541_514c5f92d85542ca9d40e3b54b959b1c~mv2.png',
  goose: 'd18541_218fe4a006394f6b87ca15831690202c~mv2.png',
  marquees: {
    top: { color: '#C7BCB4', separator: '#FF5E1A', duration: 57.33 },
    mid: { color: '#8E8279', separator: '#02CA81', duration: 57.33 },
    bottom: { color: '#C7BCB4', separator: '#FF5E1A', duration: 57.33 },
  },
  tbc: { left: 491 },
  bubbles: bubbles.map((b) => {
    const rules = rulesFor(b.id)
    const size = parseSize(rules)
    const pos = parsePos(rules)
    const maskImage = parseMask(rules)
    return {
      ...b,
      width: size.width,
      height: size.height,
      left: pos.left,
      top: pos.top,
      margin: pos.margin,
      leftPct: pos.left != null ? (pos.left / SITE_WIDTH) * 100 : null,
      topPct: TOP_PCT[b.id] ?? null,
      maskImage,
    }
  }),
}

fs.writeFileSync(outPath, `export const WIX_HOME = ${JSON.stringify(home, null, 2)}\n`)
console.log('Wrote', outPath)
console.log(JSON.stringify(home.bubbles, null, 2))
