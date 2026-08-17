import fs from 'node:fs'
import path from 'node:path'

const htmlPath = process.argv[2]
const html = fs.readFileSync(htmlPath, 'utf8')
const page = html.match(/<style id="css_jsa1g">([\s\S]*?)<\/style>/)?.[1] || ''
const comp = html.match(/<style id="compCssMappers_jsa1g">([\s\S]*?)<\/style>/)?.[1] || ''

const comps = [
  'comp-m1ndbhel', 'comp-m1qdre76', 'comp-m1qdsezx', 'comp-m1qdtqns', 'comp-m1qdvj3s',
  'comp-m1qextto', 'comp-m1qfat47', 'comp-m1qfd6fc', 'comp-m1qfec3k', 'comp-m1qfeihu',
  'comp-m1qgxhoh', 'comp-m1ru42wa', 'comp-lt8qvjya', 'comp-lt8qvjyb1', 'comp-m1qgnssk',
]

for (const id of comps) {
  const meshRe = new RegExp(`\\[id="${id}"\\][^{]*\\{([^}]+)\\}`, 'g')
  const rules = [...page.matchAll(meshRe)].map((m) => m[1].trim())
  const compRe = new RegExp(`#${id}\\{([^}]+)\\}`, 'g')
  const compRules = [...comp.matchAll(compRe)].map((m) => m[1].trim())
  if (rules.length || compRules.length) {
    console.log(`=== ${id} ===`)
    ;[...rules, ...compRules].forEach((r) => console.log(r))
  }
}

const warm = JSON.parse(html.match(/<script type="application\/json" id="wix-warmup-data">([\s\S]*?)<\/script>/)?.[1] || '{}')
const map = warm?.pages?.compIdToTypeMap || {}
console.log('\n=== TYPES ===')
for (const id of comps) {
  if (map[id]) console.log(id, '->', map[id])
}

// extract hrefs from homepage body section
const hrefs = [...html.matchAll(/href="(\/[^"]+)"/g)].map((m) => m[1]).filter((h) => h.startsWith('/'))
console.log('\n=== ROUTES ===')
;[...new Set(hrefs)].sort().forEach((h) => console.log(h))
