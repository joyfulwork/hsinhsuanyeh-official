import { Marquee, StarIcon } from '../components/Marquee.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { ILLUSTRATION_ITEMS, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'

export default function IllustrationListPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.illustration[lang]

  usePageMeta({
    ...meta,
    canonicalPath: lang === 'zh' ? '/zh/illustration/' : '/illustration/',
    enPath,
    zhPath,
  })

  return (
    <PageLayout activeKey="illustration">
      <div style={{ marginTop: '90px' }}>
        <Marquee className="big m-grey">
          <StarIcon stroke="#3b4bd8" />
          <span className="word">illustration</span>
          <StarIcon stroke="#3b4bd8" />
          <span className="word">illustration</span>
        </Marquee>
      </div>

      <div className="masonry">
        {ILLUSTRATION_ITEMS.map((image) => (
          <img key={image} className="item" src={projectImage(image)} alt="" />
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <Marquee className="big m-cream">
          <StarIcon stroke="#ff5e1a" />
          <span className="word" style={{ color: '#fff' }}>
            illustration
          </span>
          <StarIcon stroke="#ff5e1a" />
          <span className="word" style={{ color: '#fff' }}>
            illustration
          </span>
        </Marquee>
      </div>
    </PageLayout>
  )
}
