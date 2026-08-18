export const SITE = {
  name: 'Hsin Hsuan Yeh',
  domain: 'https://www.hsinhsuanyeh.com',
  email: 'joyfulbeings.animation@gmail.com',
  defaultOgImage: '/assets/images/d18541_d36828e100dd4bd1b0a1b7a62ef89ba6~mv2.png',
}

export const AVATAR_FRAMES = [
  'd18541_d36828e100dd4bd1b0a1b7a62ef89ba6~mv2.png',
  'd18541_ed2571ff463e4ddabc7d011d9f0f1a95~mv2.png',
]

export const SOCIALS = [
  ['Instagram', 'https://www.instagram.com/hsuan_.art/', 'd7ffe259c9e54f59837481b3dd0130eb.png'],
  ['Vimeo', 'https://vimeo.com/user39816187', '1422b22453ff489bbe36b58b1e642f3e.png'],
  ['LinkedIn', 'https://www.linkedin.com/in/hsin-hsuan-yeh-7474b6231/', '11062b_701377645cb348b9bd31d5ae3a7c85e0~mv2.png'],
  ['Facebook', 'https://www.facebook.com/hsinhsuan.yeh/', 'd3470ec8ca26475da4b228f0199b5d3d.png'],
]

export const NAV = {
  en: [
    { key: 'animation', label: 'Animation', path: '/animation/' },
    { key: 'vr', label: 'VR', path: '/vr/' },
    { key: 'illustration', label: 'Illustration', path: '/illustration/' },
    { key: 'comics', label: 'Comics', path: '/comics/' },
    { key: 'about', label: 'About / Contact', path: '/about-contact/' },
  ],
  zh: [
    { key: 'animation', label: '| 動 畫', path: '/zh/animation/' },
    { key: 'vr', label: '| V R', path: '/zh/vr/' },
    { key: 'illustration', label: '| 插 畫', path: '/zh/illustration/' },
    { key: 'comics', label: '| 漫 畫', path: '/zh/comics/' },
    { key: 'about', label: '| 介 紹', path: '/zh/about-contact/' },
  ],
}

export const ROUTES = [
  { path: '/', en: '/', zh: '/zh/' },
  { path: '/animation/', en: '/animation/', zh: '/zh/animation/' },
  { path: '/animation/ashes/', en: '/animation/ashes/', zh: '/zh/animation/ashes/' },
  { path: '/animation/doitagain/', en: '/animation/doitagain/', zh: '/zh/animation/doitagain/' },
  { path: '/animation/commis2-police/', en: '/animation/commis2-police/', zh: '/zh/animation/commis2-police/' },
  { path: '/animation/lastsummer/', en: '/animation/lastsummer/', zh: '/zh/animation/lastsummer/' },
  { path: '/animation/ws2/', en: '/animation/ws2/', zh: '/zh/animation/ws2/' },
  { path: '/animation/ws1/', en: '/animation/ws1/', zh: '/zh/animation/ws1/' },
  { path: '/animation/comi-yanto/', en: '/animation/comi-yanto/', zh: '/zh/animation/comi-yanto/' },
  { path: '/animation/commission(1)/', en: '/animation/commission(1)/', zh: '/zh/animation/commission(1)/' },
  { path: '/animation/cake/', en: '/animation/cake/', zh: '/zh/animation/cake/' },
  { path: '/vr/', en: '/vr/', zh: '/zh/vr/' },
  { path: '/vr-son/', en: '/vr-son/', zh: '/zh/vr-son/' },
  { path: '/illustration/', en: '/illustration/', zh: '/zh/illustration/' },
  { path: '/illustration/crystal/', en: '/illustration/crystal/', zh: '/zh/illustration/crystal/' },
  { path: '/illustration/spirit/', en: '/illustration/spirit/', zh: '/zh/illustration/spirit/' },
  { path: '/illustration/watermelon/', en: '/illustration/watermelon/', zh: '/zh/illustration/watermelon/' },
  {
    path: '/illustration/landscape-magazine-photoshoot/',
    en: '/illustration/landscape-magazine-photoshoot/',
    zh: '/zh/illustration/landscape-magazine-photoshoot/',
  },
  { path: '/illustration/wild-spirit/', en: '/illustration/wild-spirit/', zh: '/zh/illustration/wild-spirit/' },
  {
    path: '/illustration/espinas-mezcal-ad/',
    en: '/illustration/espinas-mezcal-ad/',
    zh: '/zh/illustration/espinas-mezcal-ad/',
  },
  { path: '/illustration/summer-secrets/', en: '/illustration/summer-secrets/', zh: '/zh/illustration/summer-secrets/' },
  { path: '/illustration/under-the-sun/', en: '/illustration/under-the-sun/', zh: '/zh/illustration/under-the-sun/' },
  { path: '/illustration/policeseries/', en: '/illustration/policeseries/', zh: '/zh/illustration/policeseries/' },
  { path: '/comics/', en: '/comics/', zh: '/zh/comics/' },
  { path: '/comics/comeout/', en: '/comics/comeout/', zh: '/zh/comics/comeout/' },
  { path: '/about-contact/', en: '/about-contact/', zh: '/zh/about-contact/' },
]

export function img(filename) {
  return `/assets/images/${filename}`
}

export function localizedPath(path, lang) {
  const route = ROUTES.find((r) => r.path === path || r.en === path || r.zh === path)
  if (!route) return lang === 'zh' ? `/zh${path === '/' ? '/' : path}` : path
  return lang === 'zh' ? route.zh : route.en
}

export function alternateLangPath(pathname, lang) {
  const normalized = pathname.endsWith('/') || pathname === '' ? pathname : `${pathname}/`
  const fixed = normalized === '' ? '/' : normalized
  const route = ROUTES.find((r) => r.en === fixed || r.zh === fixed)
  if (!route) return lang === 'zh' ? '/zh/' : '/'
  return lang === 'zh' ? route.zh : route.en
}
