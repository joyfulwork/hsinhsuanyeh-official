import { img } from './site.js'

export const HOME_BUBBLES = [
  {
    href: '/comics/comeout/',
    style: { left: '14.5%', top: '5.3%', width: '22%', aspectRatio: '281/318' },
    image: 'home-comeout-bubble.jpg',
    alt: "Why don't you come out",
    rotate: 6.5413450980419725,
  },
  {
    href: '/vr-son/',
    style: { left: '38.6%', top: '7.4%', width: '16.3%', aspectRatio: '209/234' },
    image: 'vr-son-scene-02.jpg',
    alt: 'Sense Of Nowhere',
    rotate: 7.620762144727507,
  },
  {
    href: '/animation/ashes/',
    style: { left: '69.9%', top: '6.6%', width: '15.6%', aspectRatio: '200/229' },
    image: 'anim-ashes-gallery-10.jpg',
    alt: 'Ashes',
  },
  {
    href: '/animation/doitagain/',
    style: { left: '53.4%', top: '23.9%', width: '17.1%', aspectRatio: '219/229' },
    image: 'home-doitagain-bubble.jpg',
    alt: 'DO IT AGAIN',
  },
  {
    href: '/illustration/summer-secrets/',
    style: { left: '18%', top: '37.7%', width: '26%', aspectRatio: '333/377' },
    image: 'illus-summersecrets-gallery-03.jpg',
    alt: 'Summer Secrets',
    rotate: 353.5378734853472,
  },
  {
    style: { left: '47.7%', top: '52.1%', width: '15.9%', aspectRatio: '204/238' },
    image: 'vr-animalspirits-bubble.png',
    alt: 'Animal Spirits VR',
    static: true,
  },
]

export const ANIMATION_GRID = [
  {
    href: '/animation/ashes/',
    image: 'anim-ashes-hero.jpg',
    alt: 'Ashes',
    title: 'Ashes',
  },
  {
    href: '/animation/commis2-police/',
    image: 'anim-police-hero.png',
    alt: "Commissioned(3) Police's Christmas",
    title: "Commissioned(3) Police's Christmas",
  },
  {
    href: '/animation/doitagain/',
    image: 'anim-doitagain-hero.jpg',
    alt: 'DO IT AGAIN',
    title: 'DO IT AGAIN',
  },
  {
    href: '/animation/lastsummer/',
    image: 'anim-lastsummer-hero.jpg',
    alt: 'The Last Day of Summer',
    title: 'The Last Day of Summer',
  },
  {
    href: '/animation/ws2/',
    image: 'anim-ws2-hero.jpg',
    alt: 'WorkShops(2) Vilar, Portugal',
    title: 'WorkShops(2) Vilar, Portugal',
  },
  {
    href: '/animation/ws1/',
    image: 'anim-ws1-hero.jpg',
    alt: 'WorkShops(1) Montemor-o-Novo, Portugal',
    title: 'WorkShops(1) Montemor-o-Novo, Portugal',
  },
  {
    href: '/animation/comi-yanto/',
    image: 'anim-yanto-hero.png',
    alt: 'Commissioned(2) Yanto Gorenji',
    title: 'Commissioned(2) Yanto Gorenji',
  },
  {
    href: '/animation/commission(1)/',
    image: 'anim-samuelsdrink-hero.png',
    alt: "Commissioned(1) Samuel's Magical Drink",
    title: "Commissioned(1) Samuel's Magical Drink",
  },
  {
    href: '/animation/cake/',
    image: 'anim-cake-hero.jpg',
    alt: 'A Piece Of Cake',
    title: 'A Piece Of Cake',
  },
]

export const ANIMATION_ORDER = [
  'ashes',
  'commis2-police',
  'doitagain',
  'lastsummer',
  'ws2',
  'ws1',
  'comi-yanto',
  'commission(1)',
  'cake',
]

const mediaImage = (file) => ({ type: 'image', file })
const mediaRow = (...items) => ({ type: 'row', items })
const mediaWixVideo = (poster) => ({
  type: 'video',
  poster,
  src: `https://video.wixstatic.com/video/${poster.replace(/\.(jpg|jpeg|png)$/i, '')}/480p/mp4/file.mp4`,
})

export const ANIMATION_DETAILS = {
  ashes: {
    title: 'Ashes',
    metaLine: "2D, Stopmotion / 6' 00'' / 2020 / Solo Work",
    hero: 'anim-ashes-hero.jpg',
    watch: 'https://vimeo.com/423972232',
    embedVimeo: true,
    desc: `If the fire nearby is already hard to rescue; how could you extinguish the flames that last forever?
What you can do is let them be, and try to find things left in the ashes.`,
    media: [
      mediaRow(
        mediaImage('anim-ashes-gallery-01.jpg'),
        mediaImage('anim-ashes-gallery-02.jpg'),
        mediaImage('anim-ashes-gallery-03.jpg'),
      ),
      mediaRow(
        mediaImage('anim-ashes-gallery-04.jpg'),
        mediaImage('anim-ashes-gallery-05.jpg'),
      ),
      mediaImage('anim-ashes-gallery-06.jpg'),
      mediaRow(
        mediaImage('anim-ashes-gallery-07.jpg'),
        mediaImage('anim-ashes-gallery-08.jpg'),
      ),
      mediaImage('anim-ashes-gallery-09.jpg'),
      mediaImage('anim-ashes-gallery-10.jpg'),
    ],
    credits: `A film by\tHsin-Hsuan Yeh
Voice Cast\tHsin-Hsuan Yeh, Wei-Chen Suo
Sound Design & Mixing\tChia-Yu Chen
Music\tChung-Yang Wang
Animation Assistants\tCheng Chen Kai, Ying-Hsuan Yeh, Hsin-Yu Liu, Shu Tzu Lin, Lieng-Jie Chen, Chen-Ying Chen, Sih-Yi Hou`,
    festivals: `2022 River Film Festival / Best Script, JINS Future Potential Award / Taiwan
2021 Fest Anča International Animation Festival / WORLD PANORAMA / Non-Competition / Slovakia
2021 43rd Golden Harvest Awards for Outstanding Short Films / Best Student Animated Film / Taiwan
2021 Cartoon Club International Festival of Animation Cinema, Comics and Games / Finalist / Italy
2021 Animakom / Student Competition / Spain
2021 ANIMA, Córdoba International Animation Festival / International Competition / Argentina
2021 YOUKI International Youth Media Festival / International Competition / Austria
2021 Cartoons on the Bay Film Festival / Non-Competition / Italy
2021 GIRAF 17 - International Festival of Independent Animation / Canada
2021 Animae Caribe International Animation & Digital Media Festival
2020 Canlandıranlar Film Festival / Non-Competition / Turkey`,
    meta: {
      en: {
        title: 'Ashes | Hsin Hsuan Yeh',
        description:
          'Ashes — a 2D stop-motion animated short film by Hsin-Hsuan Yeh (2020). Watch on Vimeo.',
      },
      zh: {
        title: '遠火 Ashes | Hsin Hsuan Yeh',
        description: '《遠火 Ashes》— 葉信萱 2020 年 2D 停格動畫短片。',
      },
    },
  },
  'commis2-police': {
    title: "Commissioned(3) Police's Christmas",
    metaLine: "Stopmotiom / 3' 35'' / 2022 / Solo Work",
    hero: 'anim-police-hero.png',
    watch: 'https://www.youtube.com/watch?v=hrPWbcbMDxQ',
    desc: 'A commercial for Police Agency of Taiwan.',
    meta: {
      en: {
        title: "Commissioned(3) Police's Christmas | Hsin Hsuan Yeh",
        description: "Commissioned(3) Police's Christmas — animation by Hsin-Hsuan Yeh.",
      },
      zh: {
        title: "Commissioned(3) Police's Christmas | Hsin Hsuan Yeh",
        description: "Commissioned(3) Police's Christmas — 葉信萱動畫作品。",
      },
    },
  },
  doitagain: {
    title: 'DO IT AGAIN',
    metaLine: "2D, Stopmotion / 4' 17'' / 2018 / Solo Work",
    hero: 'anim-doitagain-hero.jpg',
    watch: 'https://vimeo.com/285239206',
    embedVimeo: true,
    desc: 'Not knowing who I am and what should I do, floating in the air, I am a bear in the mortal world. I always wander in the dead-end road, swinging back and forth between disgust and joy. When will I face my own desires without hating myself?',
    media: [
      mediaRow(
        mediaImage('anim-doitagain-gallery-01.jpg'),
        mediaImage('anim-doitagain-gallery-02.jpg'),
      ),
      mediaRow(
        mediaImage('anim-doitagain-gallery-03.jpg'),
        mediaImage('anim-doitagain-gallery-04.jpg'),
        mediaImage('anim-doitagain-gallery-05.jpg'),
      ),
      mediaWixVideo('anim-doitagain-poster.jpg'),
      mediaImage('anim-doitagain-gallery-06.jpg'),
      mediaRow(
        mediaImage('anim-doitagain-gallery-07.jpg'),
        mediaImage('anim-doitagain-gallery-08.jpg'),
      ),
      mediaRow(
        mediaImage('anim-doitagain-gallery-09.jpg'),
        mediaImage('anim-doitagain-gallery-10.jpg'),
      ),
      mediaImage('anim-doitagain-gallery-11.jpg'),
    ],
    credits: `Direction, Animation, Script\tHsin-Hsuan Yeh
Music\tTt`,
    festivals: `2021 Pixelatl Festival / Mexico / Non-Competition
2021 Formosa Festival of International Filmmaker Awards
2020 A+Cultural Heritage Creative Award / Taiwan / Media Group - Golden Award
2020 Animation Volda Festival / Norway / official selected
2020 VOID International Animation Film Festival / Denmark / official selected
2020 42th Golden Harvest Awards for Outstanding Short Films / Taiwan / Student Merit Award
2019 8th CIAFF / China / official selected
2019 MOD Golden Film Awards / Student Merit Award, 4K Film Special Prize
2019 Taiwanese American Film Festival / America / official selected
2019 Pori Film Festival / Finland / official selected
2019 International Youth Media Festival YOUKI / Austria / International Competition
2019 TOFUZI International Animated Film Festival / Georgia / STUDENT FILM
2019 LINOLEUM Animation Festival / Ukraine / special program of Erotic Animation selected
2019 MOV - IV International Student Film Festival of Pernambuco / Brazil / INTERNATIONAL COMPETITION
2019 Queer Asia Film Festival / the UK / selected
2019 La Truca Festival / Colombia / Academic Selection
2019 Fest Anča International Animation Festival / Slovakia / World Panorama selected
2019 Urban Nomad Film Fest / Taiwan / Short films competition
2019 Hacker Porn Film Festival / Italy / international competition selected
2019 Animac Lleida / Spain / Swine Shorts Program selected
2019 Animakom / Spain / Krazykom program selected
2018 Panama Animation Fest / Panama / selected`,
    meta: {
      en: {
        title: 'DO IT AGAIN | Hsin Hsuan Yeh',
        description: 'DO IT AGAIN — a 2D stop-motion animated short film by Hsin-Hsuan Yeh (2018).',
      },
      zh: {
        title: '好想被觸摸呀 DO IT AGAIN | Hsin Hsuan Yeh',
        description: '《好想被觸摸呀 DO IT AGAIN》— 葉信萱 2018 年 2D 停格動畫短片。',
      },
    },
  },
  lastsummer: {
    title: 'The Last Day of Summer',
    metaLine: "2D / 3' 55'' / 2018 / Group Project",
    hero: 'anim-lastsummer-hero.jpg',
    watch: 'https://vimeo.com/258406461',
    embedVimeo: true,
    desc: 'On a calm summer day, children want to have a different end of the vacation......',
    media: [
      mediaRow(
        mediaImage('anim-lastsummer-gallery-01.jpg'),
        mediaImage('anim-lastsummer-gallery-02.jpg'),
      ),
      mediaRow(
        mediaImage('anim-lastsummer-gallery-03.jpg'),
        mediaImage('anim-lastsummer-gallery-04.jpg'),
      ),
    ],
    credits: `Director：Tzu-Chun Chou / Hsin-Hsuan Yeh / Tzu-Ying Chen
Storyboard：Tzu-Chun Chou
Character Design： Hsin-Hsuan Yeh
Art Design： Hsin-Hsuan Yeh
Key Animation： Hsin-Hsuan Yeh
Animatic： Tzu-Ying Chen
Post-production： Tzu-Ying Chen /  Hsin-Hsuan Yeh
In-betweens： Tzu-Chun Chou
Colorist： Tzu-Ying Chen
Voice actor： Huang Wang /  Chun-Wei Chen /  Hsin-Hsuan Yeh
Music：Yi-Hsiu Yang
Sound Designer： Kun-Yu Lee
Voice recorder： Chia-Yu Chen
Department of Animation, Taipei National University of the Arts 2018
Brat Studio Presents`,
    festivals: `2018 Indie-AniFest- Asia Road competition
2018 ReAnima international film Festival - competition
2018 East Asia Film Festival Ireland - screening
2018 BitBang Festival - International School Short
2018 CutOut Festital - Official Selection of Student Film
2018 Tbilisi International Animation Festival - International Short Films Competition
2018 ANIMASIVO - Contemporary Animation Festival - Student Category
2019 International Usak Winged Seahorse Short Film Festival - official selection
2019 Animakom Festival - Official Selection STUDENTS COMPETITION
2019 MIYFF Melbourne International Youth Film Festival - official selected
2019 Warsaw Animation Film Festival - official Young Animation competition
2019 Athens Digital Arts Festival -Official Selection
2020 13th International Inter University Short Film Festival
2020 5th Chaniartoon Festival`,
    meta: {
      en: {
        title: 'The Last Day of Summer | Hsin Hsuan Yeh',
        description: 'The Last Day of Summer — animation by Hsin-Hsuan Yeh.',
      },
      zh: {
        title: 'The Last Day of Summer | Hsin Hsuan Yeh',
        description: 'The Last Day of Summer — 葉信萱動畫作品。',
      },
    },
  },
  ws2: {
    title: 'WorkShops(2) Vilar, Portugal',
    metaLine: "2D / 0' 3'' / 2023 / Solo Work",
    hero: 'anim-ws2-hero.jpg',
    desc: 'Workshop in Vilar, Portugal. Learning incredibly beautiful techniques with Regina Pessoa.\nSuch a wonderful trip :)',
    media: [
      mediaRow(
        mediaWixVideo('anim-ws2-poster.jpg'),
        mediaImage('anim-ws2-gallery-01.png'),
      ),
      mediaImage('anim-ws2-gallery-02.png'),
    ],
    meta: {
      en: {
        title: 'WorkShops(2) Vilar, Portugal | Hsin Hsuan Yeh',
        description: 'WorkShops(2) Vilar, Portugal — animation by Hsin-Hsuan Yeh.',
      },
      zh: {
        title: 'WorkShops(2) Vilar, Portugal | Hsin Hsuan Yeh',
        description: 'WorkShops(2) Vilar, Portugal — 葉信萱動畫作品。',
      },
    },
  },
  ws1: {
    title: 'WorkShops(1) Montemor-o-Novo, Portugal',
    metaLine: "2D / 0' 17'' / 2023 / Solo Work",
    hero: 'anim-ws1-hero.jpg',
    desc: 'A week of workshop in Montemor-o-Novo, Portugal. Have some fun in this cozy little town and great experience',
    media: [
      mediaRow(
        mediaWixVideo('anim-ws1-poster.jpg'),
        mediaImage('anim-ws1-gallery-01.jpg'),
      ),
      mediaImage('anim-ws1-gallery-02.jpg'),
    ],
    meta: {
      en: {
        title: 'WorkShops(1) Montemor-o-Novo, Portugal | Hsin Hsuan Yeh',
        description: 'WorkShops(1) Montemor-o-Novo, Portugal — animation by Hsin-Hsuan Yeh.',
      },
      zh: {
        title: 'WorkShops(1) Montemor-o-Novo, Portugal | Hsin Hsuan Yeh',
        description: 'WorkShops(1) Montemor-o-Novo, Portugal — 葉信萱動畫作品。',
      },
    },
  },
  'comi-yanto': {
    title: 'Commissioned(2) Yanto Gorenji',
    metaLine: "2D / 1' 06'' / 2022 / Solo Work",
    hero: 'anim-yanto-hero.png',
    watch: 'http://www.youtube.com/watch?v=7DTjIJb1JYE',
    desc: 'A opening animation for theater projection.',
    meta: {
      en: {
        title: 'Commissioned(2) Yanto Gorenji | Hsin Hsuan Yeh',
        description: 'Commissioned(2) Yanto Gorenji — animation by Hsin-Hsuan Yeh.',
      },
      zh: {
        title: 'Commissioned(2) Yanto Gorenji | Hsin Hsuan Yeh',
        description: 'Commissioned(2) Yanto Gorenji — 葉信萱動畫作品。',
      },
    },
  },
  'commission(1)': {
    title: "Commissioned(1) Samuel's Magical Drink",
    metaLine: "2D / 0' 20''/ 2021 / Solo Work",
    hero: 'anim-samuelsdrink-hero.png',
    desc: "A Youtube Channel's Opening animation. With this project, I created some characters.",
    media: [
      mediaRow(
        mediaWixVideo('anim-samuelsdrink-poster.jpg'),
        mediaImage('anim-samuelsdrink-gallery-01.jpg'),
      ),
    ],
    meta: {
      en: {
        title: "Commissioned(1) Samuel's Magical Drink | Hsin Hsuan Yeh",
        description: "Commissioned(1) Samuel's Magical Drink — animation by Hsin-Hsuan Yeh.",
      },
      zh: {
        title: "Commissioned(1) Samuel's Magical Drink | Hsin Hsuan Yeh",
        description: "Commissioned(1) Samuel's Magical Drink — 葉信萱動畫作品。",
      },
    },
  },
  cake: {
    title: 'A Piece Of Cake',
    metaLine: "2D / 4' 12'' / 2016 / Group Project",
    hero: 'anim-cake-hero.jpg',
    watch: 'https://vimeo.com/210289444',
    embedVimeo: true,
    desc: 'The little girl is not accepted by the rabbits ,so she tried her best to join them...',
    media: [
      mediaRow(
        mediaImage('anim-cake-gallery-01.jpg'),
        mediaImage('anim-cake-gallery-02.jpg'),
      ),
      mediaRow(
        mediaImage('anim-cake-gallery-03.jpg'),
        mediaImage('anim-cake-gallery-04.jpg'),
      ),
      mediaRow(
        mediaImage('anim-cake-gallery-05.jpg'),
        mediaImage('anim-cake-gallery-06.jpg'),
      ),
    ],
    credits: `Director, Screenwriter, Animation, Coloring
Hsin Hsuan Yeh
Art Design, Post Production, Animation, Production
Hsin Chung
Music & Sound
Tim Wei
TNUA Sophomore year I Production`,
    meta: {
      en: {
        title: 'A Piece Of Cake | Hsin Hsuan Yeh',
        description: 'A Piece Of Cake — animation by Hsin-Hsuan Yeh.',
      },
      zh: {
        title: 'A Piece Of Cake | Hsin Hsuan Yeh',
        description: 'A Piece Of Cake — 葉信萱動畫作品。',
      },
    },
  },
}

export const COMICS_GRID = [
  { href: '/comics/comeout/', image: 'comics-comeout-hero.gif', alt: "Why don't you come out" },
  { image: 'illus-mole.jpg', alt: 'mole' },
  { image: 'comics-eutrip-series.jpg', alt: 'no title, EU trip comic series' },
]

export const ILLUSTRATION_GRID = [
  {
    slug: 'crystal',
    href: '/illustration/crystal/',
    image: 'illus-crystal-hero.jpg',
    alt: 'Crystal',
  },
  {
    slug: 'wild-spirit',
    href: '/illustration/wild-spirit/',
    image: 'illus-ritual-hero.jpg',
    alt: 'ritual',
  },
  {
    slug: 'under-the-sun',
    href: '/illustration/under-the-sun/',
    image: 'illus-morninglisbon-hero.jpg',
    alt: 'Morning in Lisbon',
  },
  {
    slug: 'spirit',
    href: '/illustration/spirit/',
    image: 'illus-spirit-hero.jpg',
    alt: 'Spirit',
  },
  {
    slug: 'landscape-magazine-photoshoot',
    href: '/illustration/landscape-magazine-photoshoot/',
    image: 'illus-castle-hero.jpg',
    alt: 'Castle',
  },
  {
    slug: 'summer-secrets',
    href: '/illustration/summer-secrets/',
    image: 'illus-summersecrets-hero.jpg',
    alt: 'Summer Secrets',
  },
  {
    slug: 'watermelon',
    href: '/illustration/watermelon/',
    image: 'illus-watermelon-hero.jpg',
    alt: 'watermelon',
  },
  {
    slug: 'espinas-mezcal-ad',
    href: '/illustration/espinas-mezcal-ad/',
    image: 'illus-selfportrait-hero.jpg',
    alt: 'Self-Portrait',
  },
  {
    slug: 'policeseries',
    href: '/illustration/policeseries/',
    image: 'illus-policeseries-hero.jpg',
    alt: 'NPA Commissioned Series',
  },
]

export const ILLUSTRATION_ORDER = ILLUSTRATION_GRID.map((item) => item.slug)

function illustrationProject(title, hero, gallery = []) {
  return {
    title,
    hero,
    gallery,
    meta: {
      en: {
        title: `${title} | Hsin Hsuan Yeh`,
        description: `${title} — illustration by Hsin-Hsuan Yeh.`,
      },
      zh: {
        title: `${title} | Hsin Hsuan Yeh`,
        description: `${title} — 葉信萱插畫作品。`,
      },
    },
  }
}

export const ILLUSTRATION_DETAILS = {
  crystal: illustrationProject('Crystal', 'illus-crystal-hero.jpg', [
    'illus-crystal-gallery-01.jpg',
  ]),
  spirit: illustrationProject('Spirit', 'illus-spirit-hero.jpg', [
    'illus-spirit-gallery-01.jpg',
    'illus-spirit-gallery-02.jpg',
  ]),
  watermelon: illustrationProject('watermelon', 'illus-watermelon-hero.jpg', [
    'illus-watermelon-gallery-01.jpg',
    'illus-watermelon-gallery-02.jpg',
  ]),
  'landscape-magazine-photoshoot': illustrationProject(
    'Castle',
    'illus-castle-hero.jpg',
    [
      'illus-castle-gallery-01.jpg',
      'illus-castle-gallery-02.jpg',
      'illus-castle-gallery-03.jpg',
    ],
  ),
  'wild-spirit': illustrationProject('ritual', 'illus-ritual-hero.jpg', [
    'illus-ritual-gallery-01.jpg',
    'illus-ritual-gallery-02.jpg',
    'illus-ritual-gallery-03.jpg',
    'illus-ritual-gallery-04.jpg',
  ]),
  'espinas-mezcal-ad': illustrationProject('Self-Portrait', 'illus-selfportrait-hero.jpg', [
    'illus-selfportrait-gallery-01.jpg',
    'illus-selfportrait-gallery-02.jpeg',
    'illus-selfportrait-gallery-03.jpg',
    'illus-selfportrait-gallery-04.jpg',
    'illus-selfportrait-gallery-05.jpg',
    'illus-selfportrait-gallery-06.jpg',
    'illus-selfportrait-gallery-07.jpg',
    'illus-selfportrait-gallery-08.jpg',
    'illus-selfportrait-gallery-09.jpg',
  ]),
  'summer-secrets': illustrationProject('Summer Secrets', 'illus-summersecrets-hero.jpg', [
    'illus-summersecrets-gallery-01.jpg',
    'illus-summersecrets-gallery-02.jpg',
    'illus-summersecrets-gallery-03.jpg',
  ]),
  'under-the-sun': illustrationProject('Morning in Lisbon', 'illus-morninglisbon-hero.jpg', [
    'illus-morninglisbon-gallery-01.jpg',
    'illus-morninglisbon-gallery-02.jpg',
    'illus-morninglisbon-gallery-03.jpg',
    'illus-morninglisbon-gallery-04.jpg',
  ]),
  policeseries: illustrationProject('NPA Commissioned Series', 'illus-policeseries-hero.jpg', [
    'illus-policeseries-gallery-01.jpg',
    'illus-policeseries-gallery-02.jpg',
    'illus-policeseries-gallery-03.jpg',
    'illus-policeseries-gallery-04.jpg',
    'illus-policeseries-gallery-05.jpg',
    'illus-policeseries-gallery-06.jpg',
    'illus-policeseries-gallery-07.jpg',
    'illus-policeseries-gallery-08.jpg',
    'illus-policeseries-gallery-09.jpg',
    'illus-policeseries-gallery-10.jpg',
    'illus-policeseries-gallery-11.jpg',
  ]),
}

export const ABOUT = {
  en: {
    nameLines: ['Hsin-Hsuan', 'Yeh'],
    roles: 'Animator, Director, Story teller',
    bio: 'Hsin-Hsuan has experience in 2D animation and stop-motion animation, and from 2023, has ventured into creating VR interactive experiences. Her work focuses on the experimental exploration of animation materials and visual language that interests people.',
  },
  zh: {
    nameLines: ['葉 信萱'],
    roles: '動畫，導演，敘事的人',
    bio: '擁有2D動畫與停格動畫的經驗，並自2023年起涉足VR互動體驗的製作。她的作品專注於動畫材質與視覺語彙的實驗性探索，致力於創作有趣的作品。',
  },
}

export const ASHES = {
  title: 'Ashes',
  hero: 'anim-ashes-hero.jpg',
  meta: "2D, Stopmotion / 6' 00'' / 2020 / Solo Work",
  watch: 'https://vimeo.com/423972232',
  desc: `If the fire nearby is already hard to rescue; how could you extinguish the flames that last forever?
What you can do is let them be, and try to find things left in the ashes.`,
  gallery: [
    'anim-ashes-gallery-01.jpg',
    'anim-ashes-gallery-02.jpg',
    'anim-ashes-gallery-03.jpg',
  ],
  credits: `A film by\tHsin-Hsuan Yeh
Voice Cast\tHsin-Hsuan Yeh, Wei-Chen Suo
Sound Design & Mixing\tChia-Yu Chen
Music\tChung-Yang Wang
Animation Assistants\tCheng Chen Kai, Ying-Hsuan Yeh, Hsin-Yu Liu, Shu Tzu Lin, Lieng-Jie Chen, Chen-Ying Chen, Sih-Yi Hou`,
  festivals: `2022 River Film Festival / Best Script, JINS Future Potential Award / Taiwan
2021 Fest Anča International Animation Festival / WORLD PANORAMA / Non-Competition / Slovakia
2021 43rd Golden Harvest Awards for Outstanding Short Films / Best Student Animated Film / Taiwan
2021 Cartoon Club International Festival of Animation Cinema, Comics and Games / Finalist / Italy
2021 Animakom / Student Competition / Spain
2021 ANIMA, Córdoba International Animation Festival / International Competition / Argentina
2021 YOUKI International Youth Media Festival / International Competition / Austria
2021 Cartoons on the Bay Film Festival / Non-Competition / Italy
2021 GIRAF 17 - International Festival of Independent Animation / Canada
2021 Animae Caribe International Animation & Digital Media Festival
2020 Canlandıranlar Film Festival / Non-Competition / Turkey`,
}

export const DO_IT_AGAIN = {
  title: 'DO IT AGAIN',
  hero: 'anim-doitagain-hero.jpg',
  meta: "2D, Stopmotion / 4' 17'' / 2018 / Solo Work",
  watch: 'https://vimeo.com/285239206',
  desc: 'Not knowing who I am and what should I do, floating in the air, I am a bear in the mortal world. I always wander in the dead-end road, swinging back and forth between disgust and joy. When will I face my own desires without hating myself?',
  gallery: [
    'anim-doitagain-gallery-01.jpg',
    'anim-doitagain-gallery-02.jpg',
  ],
  credits: `Direction, Animation, Script\tHsin-Hsuan Yeh
Music\tTt`,
  festivals: `2021 Pixelatl Festival / Mexico / Non-Competition
2021 Formosa Festival of International Filmmaker Awards
2020 A+Cultural Heritage Creative Award / Taiwan / Media Group - Golden Award
2020 Animation Volda Festival / Norway / official selected
2020 VOID International Animation Film Festival / Denmark / official selected
2020 42th Golden Harvest Awards for Outstanding Short Films / Taiwan / Student Merit Award
2019 8th CIAFF / China / official selected
2019 MOD Golden Film Awards / Student Merit Award, 4K Film Special Prize
2019 Taiwanese American Film Festival / America / official selected
2019 Pori Film Festival / Finland / official selected
2019 International Youth Media Festival YOUKI / Austria / International Competition
2019 TOFUZI International Animated Film Festival / Georgia / STUDENT FILM
2019 LINOLEUM Animation Festival / Ukraine / special program of Erotic Animation selected
2019 MOV - IV International Student Film Festival of Pernambuco / Brazil / INTERNATIONAL COMPETITION
2019 Queer Asia Film Festival / the UK / selected
2019 La Truca Festival / Colombia / Academic Selection
2019 Fest Anča International Animation Festival / Slovakia / World Panorama selected
2019 Urban Nomad Film Fest / Taiwan / Short films competition
2019 Hacker Porn Film Festival / Italy / international competition selected
2019 Animac Lleida / Spain / Swine Shorts Program selected
2019 Animakom / Spain / Krazykom program selected
2018 Panama Animation Fest / Panama / selected`,
}

export const COMEOUT = {
  title: "Why don't you come out?",
  hero: 'comics-comeout-hero.gif',
  meta: '2021 · WebComic / Animated / 8P',
  desc: 'During the pandemic, freedom of going anywhere as a human was limited. While the animals came back to streets or national parks, they enjoyed the freedom once again.',
  pages: [
    'comics-comeout-page-01.gif',
    'comics-comeout-page-02.gif',
  ],
}

export const SUMMER_SECRETS = ILLUSTRATION_DETAILS['summer-secrets']

export const VR_SON = {
  en: {
    intro:
      'Sense of Nowhere is a contemplative journey of associative thinking in the interactive, hand-tracking VR format. Inspired by Buddhism, Taoism, Hinduism and Psychology. Using the hand gestures inspired by mudras, the audience is invited to navigate the mind and the environment, searching something that resonates.',
    meta: 'VR · interactive, photogrammetry, hand-tracking',
    scrollHint: 'Scroll down for more details',
    makingOf: 'MAKING OF',
    concept: 'Concept',
    clay: 'Clay Sculpturing',
    exhibition: 'Exhibition',
    credit: 'Credit',
    footer:
      'This project was developed in the context of the European Joint Master RE:Anima.\nThis project has been further developed during the Villa Formose Immersive - France XR Prototyping Residency.',
  },
  zh: {
    intro:
      '《Sense of Nowhere》是一場互動型的VR沉思旅程，其故事靈感受佛教、道教、印度教和心理學啟發。邀請觀眾使用雙手，藉由兩種「手印」手勢來探索心靈與環境，拼湊及尋找共鳴之物。',
    meta: 'VR · #互動, #攝影量測法, #手勢追蹤',
    scrollHint: '往下滑看更多',
    makingOf: '幕後製作',
    concept: '概念美術',
    clay: '黏土雕塑',
    exhibition: '展覽',
    credit: '製作名單',
    footer:
      '本專案於歐洲聯合碩士 RE:Anima 計畫中發展。\n本專案於 Villa Formose Immersive — France XR Prototyping Residency 期間持續發展。',
  },
  conceptImages: [
    'vr-son-concept-pig.png',
    'vr-son-scene-01.png',
    'vr-son-scene-02.jpg',
    'vr-son-scene-03.jpg',
  ],
  clayImages: [
    'vr-son-makingof-figure.png',                        // [0] making-of figure (pig sculpture)
    'vr-son-concept-01.jpg',                            // [1] concept left
    'vr-son-concept-02.jpg',                            // [2] concept right
    'vr-son-clay-hand.jpg',                               // [3] clay left (hand)
    'vr-son-clay-figure-02.jpg',                        // [4] clay mid (figure)
    'vr-son-clay-pepper.jpg',                             // [5] clay right (pepper)
  ],
  exhibitions: [
    {
      title: 'NewImages Festival\n(WIP Presentation)',
      when: 'Paris, France\nApril 24th-28th, 2024\nProvided by TAICCA, Photo by Yi-Chen Lee',
      images: ['vr-son-exhibition-newimages-01.jpg', 'vr-son-exhibition-newimages-02.jpg'],
    },
    {
      title: 'Aalto University - Väre V2 Gallery\n(WIP Exhibition & Screening)',
      when: 'Espoo, Finland\nMay 14th-19th, 2024',
      images: ['vr-son-exhibition-aalto-01.jpg', 'vr-son-exhibition-aalto-02.jpg'],
    },
    {
      title: 'TTXC\n(WIP Presentation)',
      when: 'October 12th-27th, 2024\nKaohsiung, Taiwan',
      images: [
        'vr-son-exhibition-ttxc-01.jpg',
        'vr-son-exhibition-ttxc-02.jpg',
        'vr-son-exhibition-ttxc-03.jpg',
      ],
    },
    {
      title: 'Venice International Film Festival\nImmersive Competition\n(World Premiere)',
      when: 'August 27th-Sep 6th, 2025\nVenice, Italy',
      images: [
        'vr-son-exhibition-venice-01.jpg',
        'vr-son-exhibition-venice-02.jpg',
        'vr-son-exhibition-venice-03.jpg',
      ],
    },
  ],
  credits: `Director, Script Writer\tHsin-Hsuan Yeh

\tChapter 1, Particle
\t\tVisual Development\tYu-Jie Huang
\t\tProgramming

\tChapter 2, Material
\tChapter 3, Subconsciousness
\tChapter 4, Reality

\t\tHand-Tracking\tKirjonen Markus
\t\tGame Development\tBrian Chen

\t\tArt Direction\tHsin-Hsuan Yeh
\t\tModel Design
\t\tModel Production
\t\tPhotogrammetry Scanning

\t\tRigging\tXin-Tien Li
\t\tAnimation

\t\tModel Clean-Up\tChen Yen Hsun
 \t\tKevin Lai

\t\tTechnical Art\tBrian Chen

\t\t3D Model and Texturing\tChen Yen Hsun
\t\tBus Environment Built-Up\tHsin-Hsuan Yeh

|||COLUMN_BREAK|||

Sound Design\tBo-Yi Wu
Fmod Integration

Music Composition\tSherwin Yang

Tabla, Udu, Cuica, Pandeiro\tMeng-Hang Shih

Gamelan Gong Kebyar, Kotsuzumi,\tSherwin Yang
Nohkan, Ravanhatta
Gamelan Gong Kebyar\tSeung Im Seo
 \tFusheng Chen
 \tDodo Hsu
Didgeridoo\tJiro Yeh

Recording Engineer\tWei-Kang Wang
Recording Studio\tHMP Studio
Recording Studio - Gamelan\tNTU GIM
Mixing Engineer\tSherwin Yang`,
  hero: 'vr-son-hero.jpg',
  poster: 'vr-animalspirits-poster.jpg',
}

export function projectImage(filename) {
  return img(filename)
}
