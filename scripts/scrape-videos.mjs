const slug = process.argv[2] || 'commission(1)'
const d = await (await fetch(`https://www.hsinhsuanyeh.com/animation/${slug}`)).text()
const matches = [...d.matchAll(/video\.wixstatic\.com[^"'\s]+/g)].map((m) => m[0].replace(/\\u002F/g, '/').replace(/\\\//g, '/'))
console.log([...new Set(matches)])
