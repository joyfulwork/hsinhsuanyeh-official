import { Link } from '../components/Link.jsx'
import { PageLayout } from '../components/PageLayout.jsx'
import { Marquee, StarIcon } from '../components/Marquee.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { ILLUSTRATION_GRID, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

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
        <Marquee className="big m-grey" duration="15.46875s">
          <span className="word">illustration</span>
          <StarIcon stroke="#3b4bd8" />
        </Marquee>
      </div>

      <div className="masonry">
        {ILLUSTRATION_GRID.map((item) => (
          <Link key={item.slug} className="item anim-item" to={localizedPath(item.href, lang)}>
            <img className="anim-item__img" src={projectImage(item.image)} alt={item.alt} loading="lazy" />
            <div className="anim-item__overlay" aria-hidden="true" />
            <p className="anim-item__title">{item.alt}</p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <Marquee className="big m-cream" duration="15.46875s">
          <span className="word" style={{ color: '#fff' }}>
            illustration
          </span>
          <StarIcon stroke="#ff5e1a" />
        </Marquee>
      </div>
    </PageLayout>
  )
}
