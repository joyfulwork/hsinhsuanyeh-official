import { img } from './site.js'

export const HOME_BUBBLES = [
  {
    href: '/comics/comeout/',
    style: { left: '14.5%', top: '5.3%', width: '22%', aspectRatio: '281/318' },
    image: 'd18541_a11eaa4e35964183b165ef4d918c2dfd~mv2.jpg',
    alt: "Why don't you come out",
    rotate: 6.5413450980419725,
  },
  {
    href: '/vr-son/',
    style: { left: '38.6%', top: '7.4%', width: '16.3%', aspectRatio: '209/234' },
    image: 'd18541_73998acfecbc43f3bf71ffe35a56feb8~mv2.jpg',
    alt: 'Sense Of Nowhere',
    rotate: 7.620762144727507,
  },
  {
    href: '/animation/ashes/',
    style: { left: '69.9%', top: '6.6%', width: '15.6%', aspectRatio: '200/229' },
    image: 'd18541_840144796ab94fa3af333100d9fb5822~mv2.jpg',
    alt: 'Ashes',
  },
  {
    href: '/animation/doitagain/',
    style: { left: '53.4%', top: '23.9%', width: '17.1%', aspectRatio: '219/229' },
    image: 'd18541_96bf74b6144b40bcb0a5265b80abfc5d~mv2.jpg',
    alt: 'DO IT AGAIN',
  },
  {
    href: '/illustration/summer-secrets/',
    style: { left: '18%', top: '37.7%', width: '26%', aspectRatio: '333/377' },
    image: 'd18541_b9a05047f7fa41f985b933c89545a16a~mv2.jpg',
    alt: 'Summer Secrets',
    rotate: 353.5378734853472,
  },
  {
    style: { left: '47.7%', top: '52.1%', width: '15.9%', aspectRatio: '204/238' },
    image: 'd18541_96e7be12865743b3853b0abfdf81cecc~mv2.png',
    alt: 'Animal Spirits VR',
    static: true,
  },
]

export const ANIMATION_GRID = [
  {
    href: '/animation/ashes/',
    image: 'd18541_e48a4744c72d446f84e4296c51a6c02a~mv2.jpg',
    alt: 'Ashes',
    title: 'Ashes',
  },
  {
    href: '/animation/commis2-police/',
    image: 'd18541_0854b13e934d4725bdfcc8d007a1c110~mv2.png',
    alt: "Commissioned(3) Police's Christmas",
    title: "Commissioned(3) Police's Christmas",
  },
  {
    href: '/animation/doitagain/',
    image: 'd18541_edcbb8f412724d0683b7a58369feb8c8~mv2.jpg',
    alt: 'DO IT AGAIN',
    title: 'DO IT AGAIN',
  },
  {
    href: '/animation/lastsummer/',
    image: 'd18541_9ae61ad3957c4f2f91258a85fa801693~mv2.jpg',
    alt: 'The Last Day of Summer',
    title: 'The Last Day of Summer',
  },
  {
    href: '/animation/ws2/',
    image: 'd18541_47941b1efdeb41219d9e823acc28ba02~mv2.jpg',
    alt: 'WorkShops(2) Vilar, Portugal',
    title: 'WorkShops(2) Vilar, Portugal',
  },
  {
    href: '/animation/ws1/',
    image: 'd18541_5f6ac23a03994f9bb66654b8289d5709~mv2.jpg',
    alt: 'WorkShops(1) Montemor-o-Novo, Portugal',
    title: 'WorkShops(1) Montemor-o-Novo, Portugal',
  },
  {
    href: '/animation/comi-yanto/',
    image: 'd18541_d21631d5c5294852b25c43d753abfc6c~mv2.png',
    alt: 'Commissioned(2) Yanto Gorenji',
    title: 'Commissioned(2) Yanto Gorenji',
  },
  {
    href: '/animation/commission(1)/',
    image: 'd18541_f05b7aa313a0433c83935a938582d20e~mv2.png',
    alt: "Commissioned(1) Samuel's Magical Drink",
    title: "Commissioned(1) Samuel's Magical Drink",
  },
  {
    href: '/animation/cake/',
    image: 'd18541_4996657883264bb291b9273e64d0547f~mv2.jpg',
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
    hero: 'd18541_e48a4744c72d446f84e4296c51a6c02a~mv2.jpg',
    watch: 'https://vimeo.com/423972232',
    embedVimeo: true,
    desc: `If the fire nearby is already hard to rescue; how could you extinguish the flames that last forever?
What you can do is let them be, and try to find things left in the ashes.`,
    media: [
      mediaRow(
        mediaImage('d18541_18f57c761159489e945fa69a2064f584~mv2.png'),
        mediaImage('d18541_2eea73b635644e52874462d1fdb2f201~mv2.jpg'),
        mediaImage('d18541_7e74280a55534672839008a40032bda8~mv2.jpg'),
      ),
      mediaRow(
        mediaImage('d18541_2f64946f36304eb0818d9129042a0ecd~mv2.jpg'),
        mediaImage('d18541_8dda0ec30a424208a1c9f4f5fe06c796~mv2.jpg'),
      ),
      mediaImage('d18541_f63e88492cb44a5ba0629254e5338ccc~mv2.jpg'),
      mediaRow(
        mediaImage('d18541_cdec6d35c99c4529bdabf56c60411ba5~mv2.jpeg'),
        mediaImage('d18541_22f1f598b99441c696f245fa5e7a9a10~mv2.jpg'),
      ),
      mediaImage('d18541_29bf85e2b2694e85b53c0ad4832378a8~mv2.jpg'),
      mediaImage('d18541_840144796ab94fa3af333100d9fb5822~mv2.jpg'),
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
    hero: 'd18541_0854b13e934d4725bdfcc8d007a1c110~mv2.png',
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
    hero: 'd18541_edcbb8f412724d0683b7a58369feb8c8~mv2.jpg',
    watch: 'https://vimeo.com/285239206',
    embedVimeo: true,
    desc: 'Not knowing who I am and what should I do, floating in the air, I am a bear in the mortal world. I always wander in the dead-end road, swinging back and forth between disgust and joy. When will I face my own desires without hating myself?',
    media: [
      mediaRow(
        mediaImage('d18541_ea1c7bd6d5944876b61c5f126b43210a~mv2.jpg'),
        mediaImage('d18541_8737976ca7e94d7b9112f8baa86f777d~mv2.jpg'),
      ),
      mediaRow(
        mediaImage('d18541_4c64007f7e9f468494b147e02ebfc2f2~mv2.jpg'),
        mediaImage('d18541_f20d5402356a4e9f91971528d095d728~mv2.jpg'),
        mediaImage('d18541_365b130161c14b4cbd437215f338f872~mv2.jpg'),
      ),
      mediaWixVideo('d18541_77d8cb1c000f46ab83ca377597b609f5f000.jpg'),
      mediaImage('d18541_481b0f7e255946df852734665e636795~mv2.jpg'),
      mediaRow(
        mediaImage('d18541_ef4450d26726464a8bf49c1265556f1d~mv2.jpg'),
        mediaImage('d18541_d24c1bc16bfd42c29111a766fdfce8a9~mv2.jpg'),
      ),
      mediaRow(
        mediaImage('d18541_7e313288754b46bb8f24387f4afa42a5~mv2.jpg'),
        mediaImage('d18541_ba4875d499cb4688a2f3b04f8355d869~mv2.jpg'),
      ),
      mediaImage('d18541_a5d4ca1665fe4d1aa53139f44aa4afe0~mv2.jpg'),
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
    hero: 'd18541_9ae61ad3957c4f2f91258a85fa801693~mv2.jpg',
    watch: 'https://vimeo.com/258406461',
    embedVimeo: true,
    desc: 'On a calm summer day, children want to have a different end of the vacation......',
    media: [
      mediaRow(
        mediaImage('d18541_85a79183212c45c2a694515e58640ef0~mv2.jpg'),
        mediaImage('d18541_a9d5a70ec2104fa0a4c3b9378f1167cb~mv2.jpg'),
      ),
      mediaRow(
        mediaImage('d18541_53d16986bba34e08b0d0e659f4c09117~mv2.jpg'),
        mediaImage('d18541_ffae509ba78a4c3fa7f5a60f0764bfcd~mv2.jpg'),
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
    hero: 'd18541_47941b1efdeb41219d9e823acc28ba02~mv2.jpg',
    desc: 'Workshop in Vilar, Portugal. Learning incredibly beautiful techniques with Regina Pessoa.\nSuch a wonderful trip :)',
    media: [
      mediaRow(
        mediaWixVideo('d18541_92f6db884bbc455b8402ff4cf11e918df000.jpg'),
        mediaImage('d18541_9230c0c5e3b94d58b336a21f0d9b30ee~mv2.png'),
      ),
      mediaImage('d18541_723bc57f845448a79103829b1e39e75c~mv2.png'),
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
    hero: 'd18541_5f6ac23a03994f9bb66654b8289d5709~mv2.jpg',
    desc: 'A week of workshop in Montemor-o-Novo, Portugal. Have some fun in this cozy little town and great experience',
    media: [
      mediaRow(
        mediaWixVideo('d18541_22863652044f4184b63543c38be7a9ecf000.jpg'),
        mediaImage('d18541_b33869baccf94476a3296aa891504acb~mv2.jpg'),
      ),
      mediaImage('d18541_6914c847fe1747d7936915a775035104~mv2.jpg'),
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
    hero: 'd18541_d21631d5c5294852b25c43d753abfc6c~mv2.png',
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
    hero: 'd18541_f05b7aa313a0433c83935a938582d20e~mv2.png',
    desc: "A Youtube Channel's Opening animation. With this project, I created some characters.",
    media: [
      mediaRow(
        mediaWixVideo('d18541_8605b9ada4f64ee283fe039f0533eb5af000.jpg'),
        mediaImage('d18541_2a3c910936f845feaf4e06da03e507df~mv2.jpg'),
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
    hero: 'd18541_4996657883264bb291b9273e64d0547f~mv2.jpg',
    watch: 'https://vimeo.com/210289444',
    embedVimeo: true,
    desc: 'The little girl is not accepted by the rabbits ,so she tried her best to join them...',
    media: [
      mediaRow(
        mediaImage('d18541_0a3a977237da4fff8f73db3c99bce8a1~mv2.jpg'),
        mediaImage('d18541_f5447211d204427e908095e593db4800~mv2.jpg'),
      ),
      mediaRow(
        mediaImage('d18541_ebd8a893183644a58be1e57d44be5b0b~mv2.jpg'),
        mediaImage('d18541_91033888bf8648268d499b1b637f713a~mv2.jpg'),
      ),
      mediaRow(
        mediaImage('d18541_be9f53f5a1c246f6970ebb01dd558754~mv2.jpg'),
        mediaImage('d18541_3224c294bba946ae996080102c457cf1~mv2.jpg'),
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
  { href: '/comics/comeout/', image: 'd18541_bd0c131480224675a0b6cdcc96d6db4f~mv2.gif', alt: "Why don't you come out" },
  { image: 'd18541_75835dbfbbed43bdbbab1bfaaf55714d~mv2.jpg', alt: '' },
  { image: 'd18541_83384bd4b33b4c21ac4a3368124a9823~mv2.jpg', alt: '' },
]

export const ILLUSTRATION_ITEMS = [
  'd18541_3f05f9e3b599498b934176ced5ce20e2~mv2.jpg',
  'd18541_1dc4c053cdf242bf98dab3cac4b4e740~mv2.jpg',
  'd18541_06086172ff43446e91fb03981f084855~mv2.jpg',
  'd18541_020829819ae74536b1dfe818afcec74b~mv2.jpg',
  'd18541_df91202a2a1b4d699d63ea8970ed1cd8~mv2.jpg',
  'd18541_f756b8b9380d49829e4fc529ce7cfede~mv2.jpg',
]

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
  hero: 'd18541_e48a4744c72d446f84e4296c51a6c02a~mv2.jpg',
  meta: "2D, Stopmotion / 6' 00'' / 2020 / Solo Work",
  watch: 'https://vimeo.com/423972232',
  desc: `If the fire nearby is already hard to rescue; how could you extinguish the flames that last forever?
What you can do is let them be, and try to find things left in the ashes.`,
  gallery: [
    'd18541_18f57c761159489e945fa69a2064f584~mv2.png',
    'd18541_2eea73b635644e52874462d1fdb2f201~mv2.jpg',
    'd18541_7e74280a55534672839008a40032bda8~mv2.jpg',
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
  hero: 'd18541_edcbb8f412724d0683b7a58369feb8c8~mv2.jpg',
  meta: "2D, Stopmotion / 4' 17'' / 2018 / Solo Work",
  watch: 'https://vimeo.com/285239206',
  desc: 'Not knowing who I am and what should I do, floating in the air, I am a bear in the mortal world. I always wander in the dead-end road, swinging back and forth between disgust and joy. When will I face my own desires without hating myself?',
  gallery: [
    'd18541_ea1c7bd6d5944876b61c5f126b43210a~mv2.jpg',
    'd18541_8737976ca7e94d7b9112f8baa86f777d~mv2.jpg',
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
  hero: 'd18541_bd0c131480224675a0b6cdcc96d6db4f~mv2.gif',
  meta: '2021 · WebComic / Animated / 8P',
  desc: 'During the pandemic, freedom of going anywhere as a human was limited. While the animals came back to streets or national parks, they enjoyed the freedom once again.',
  pages: [
    'd18541_2238076d72084a6a93e619c7ac09d0dd~mv2.gif',
    'd18541_e71208b4d5cf45afa2deebae9812835d~mv2.gif',
  ],
}

export const SUMMER_SECRETS = {
  title: 'Summer Secrets',
  images: [
    'd18541_17c114c2f1804bb6bc6ec18f0749e816~mv2.jpg',
    'd18541_910e6176af494718b55e4301ee947ad2~mv2.jpg',
    'd18541_5b40813877f44ab8a1d318edd3466466~mv2.jpg',
  ],
}

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
    'd18541_b0b127927fa84b90b9f2e0b3ddfee282~mv2.png',
    'd18541_134e1bb803ed4c2e9db9791ef1aca53a~mv2.png',
    'd18541_73998acfecbc43f3bf71ffe35a56feb8~mv2.jpg',
    'd18541_38082a7d9c8242a894933504e4e5cabd~mv2.jpg',
  ],
  clayImages: [
    'd18541_6829bd47f90545b3b27a4fc8da607384~mv2.png',
    'd18541_c576073106e34152bf1539a40239dadc~mv2.jpeg',
    'd18541_ca0db01d03664f7a84636b23bcce3692~mv2.jpg',
    'd18541_b2b20731f48e4f1da37d57b4fa63c87a~mv2.jpg',
    'd18541_7b69e6d916bd4236a0e5b470f7f8c7df~mv2.jpg',
    'd18541_a9301310f47a4ec08c7e01851b1b4098~mv2.jpg',
  ],
  exhibitions: [
    {
      title: 'NewImages Festival (WIP Presentation)',
      when: 'Paris, France\nApril 24th-28th, 2024\nProvided by TAICCA, Photo by Yi-Chen Lee',
      images: ['d18541_4f4d3e254ad9434e90c35f51ff2fc40d~mv2.jpg', 'd18541_711f789d7135432aa28f14d41ba71f41~mv2.jpg'],
    },
    {
      title: 'Aalto University - Väre V2 Gallery (WIP Exhibition & Screening)',
      when: 'Espoo, Finland\nMay 14th-19th, 2024',
      images: ['d18541_83c94c63a07e411793abd66ac426209f~mv2.jpg', 'd18541_ee5ce5f7e70741f898b5788da6b7e0a8~mv2.jpg'],
    },
    {
      title: 'TTXC (WIP Presentation)',
      when: 'October 12th-27th, 2024\nKaohsiung, Taiwan',
      images: [
        'd18541_dd426dc1914545ba86b0e015ed2a5f1d~mv2.jpg',
        'd18541_de6fecf24ccf43a5bce2d5c1da1d9a29~mv2.jpg',
        'd18541_a4be016eb4df4dcaaa476070066e7ca5~mv2.jpg',
      ],
    },
    {
      title: 'Venice International Film Festival — Immersive Competition (World Premiere)',
      when: 'August 27th-Sep 6th, 2025\nVenice, Italy',
      images: [
        'd18541_ada571a1d04f4515a5f607a1d262a3eb~mv2.jpg',
        'd18541_1525e39e93e24c1b86fabb79e04011b8~mv2.jpg',
        'd18541_4b1d3213a52f421d8a496810dd7856c6~mv2.jpg',
      ],
    },
  ],
  credits: `Director, Script Writer\tHsin-Hsuan Yeh

Chapter 1, Particle
Visual Development\tYu-Jie Huang
Programming

Chapter 2, Material
Chapter 3, Subconsciousness
Chapter 4, Reality

Hand-Tracking\tKirjonen Markus
Game Development\tBrian Chen
Art Direction\tHsin-Hsuan Yeh
Model Design
Model Production
Photogrammetry Scanning
Rigging\tXin-Tien Li
Animation
Model Clean-Up\tChen Yen Hsun
\tKevin Lai
Technical Art\tBrian Chen
3D Model and Texturing\tChen Yen Hsun
Bus Environment Built-Up\tHsin-Hsuan Yeh

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
  hero: 'd18541_97697eff1ec64893be7e63ece1509068~mv2.jpg',
  poster: 'd18541_53aad41e03604e2eb826527a043d9677f000.jpg',
}

export function projectImage(filename) {
  return img(filename)
}
