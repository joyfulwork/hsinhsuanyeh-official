const slug = process.argv[2] || 'ashes'
const d = await (await fetch(`https://www.hsinhsuanyeh.com/animation/${slug}`)).text()

const items = []
for (const m of d.matchAll(
  /data-id="(d18541_[^"]+)"[\s\S]{0,2500}?top:(\d+(?:\.\d+)?)px;left:(\d+(?:\.\d+)?)px[\s\S]{0,800}?style="width:(\d+)px;height:(\d+)px/g,
)) {
  const chunk = m[0]
  const type = chunk.includes('play-triangle') ? 'video' : 'image'
  items.push({
    id: m[1],
    top: Math.round(+m[2]),
    left: Math.round(+m[3]),
    w: +m[4],
    h: +m[5],
    type,
  })
}

const unique = []
const seen = new Set()
for (const item of items) {
  if (seen.has(item.id)) continue
  seen.add(item.id)
  unique.push(item)
}

unique.sort((a, b) => a.top - b.top || a.left - b.left)
const rows = []
for (const item of unique) {
  const row = rows.find((r) => Math.abs(r.top - item.top) < 20)
  if (row) row.items.push(item)
  else rows.push({ top: item.top, items: [item] })
}

console.log(JSON.stringify(rows, null, 2))
