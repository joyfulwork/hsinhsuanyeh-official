async function dump(url, label) {
  const d = await (await fetch(url)).text()
  console.log('\n====', label, '====')
  const vars = [...d.matchAll(/--marquee-duration:\s*([^;]+)/g)].map((m) => m[1].trim())
  console.log('set durations', vars)
  const fallback = [...d.matchAll(/var\(--marquee-duration,([^)]+)\)/g)].map((m) => m[1].trim())
  console.log('fallbacks', [...new Set(fallback)])

  const typeMatch = d.match(/active-view-transition-type\(([A-Za-z]+)\)/)
  // find which type the site uses
  const types = [...d.matchAll(/types:\s*([A-Za-z]+)/g)].map((m) => m[1])
  console.log('transition types attr', types)
  const styleType = [...d.matchAll(/view-transition-type[^;]{0,40}/g)].slice(0, 5)
  console.log('type mentions', [...d.matchAll(/SlideHorizontal|OutIn|SlideVertical/g)].slice(0, 6).map((m) => m[0]))
}

await dump('https://www.hsinhsuanyeh.com/', 'home')
await dump('https://www.hsinhsuanyeh.com/animation', 'animation')
await dump('https://www.hsinhsuanyeh.com/illustration', 'illustration')
await dump('https://www.hsinhsuanyeh.com/comics', 'comics')

const about = await (await fetch('https://www.hsinhsuanyeh.com/about-contact')).text()
const aboutImgs = [...about.matchAll(/static\.wixstatic\.com\/media\/(d18541_[^/"']+)/g)].map((m) => m[1].split('/')[0])
console.log('\nabout raw media', [...new Set(aboutImgs)])
const fills = [...about.matchAll(/d18541_[a-f0-9]+~mv2\.(?:jpg|png)[^"]{0,80}w_(\d+),h_(\d+)/g)]
console.log('about sized', fills.slice(0, 20).map((m) => m[0].slice(0, 90) + ' ' + m[1] + 'x' + m[2]))
