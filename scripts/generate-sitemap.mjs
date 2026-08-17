import { ROUTES, SITE } from '../src/data/site.js'
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const distDir = join(root, '..', 'dist')

const urls = ROUTES.flatMap((route) => [
  `${SITE.domain}${route.en}`,
  `${SITE.domain}${route.zh}`,
])

const uniqueUrls = [...new Set(urls)]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf8')
console.log(`Wrote sitemap with ${uniqueUrls.length} URLs`)
