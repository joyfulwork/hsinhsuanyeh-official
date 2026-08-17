import { PageLayout } from '../components/PageLayout.jsx'
import { Marquee } from '../components/Marquee.jsx'
import { AnimationGridItem } from '../components/AnimationGridItem.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { ANIMATION_GRID } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'

export default function AnimationListPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.animation[lang]

  usePageMeta({
    ...meta,
    canonicalPath: lang === 'zh' ? '/zh/animation/' : '/animation/',
    enPath,
    zhPath,
  })

  return (
    <PageLayout activeKey="animation">
      <div style={{ marginTop: '110px' }}>
        <Marquee className="big m-grey">
          <span className="word">Animation</span>
          <span className="blob-orange" />
          <span className="word">Animation</span>
          <span className="blob-orange" />
        </Marquee>
      </div>

      <div className="grid cols-2 animation-grid">
        {ANIMATION_GRID.map((item) => (
          <AnimationGridItem key={item.image} item={item} />
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <Marquee className="big m-cream">
          <span className="word">Animation</span>
          <span className="blob-orange" />
          <span className="word">Animation</span>
          <span className="blob-orange" />
        </Marquee>
      </div>
    </PageLayout>
  )
}
