import { Link } from '../components/Link.jsx'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { ASHES, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function AshesPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.ashes[lang]

  usePageMeta({
    ...meta,
    ogImage: `/assets/images/${meta.ogImage}`,
    canonicalPath: lang === 'zh' ? '/zh/animation/ashes/' : '/animation/ashes/',
    enPath,
    zhPath,
    ogType: 'article',
  })

  const listPath = localizedPath('/animation/', lang)
  const prevPath = localizedPath('/animation/doitagain/', lang)
  const nextPath = localizedPath('/animation/doitagain/', lang)

  return (
    <PageLayout activeKey="animation">
      <div className="project">
        <img className="hero-img" src={projectImage(ASHES.hero)} alt={ASHES.title} />
        <h1>{ASHES.title}</h1>
        <p className="meta">{ASHES.meta}</p>
        <a className="watch" href={ASHES.watch} target="_blank" rel="noopener noreferrer">
          Watch
        </a>
        <p className="desc" style={{ whiteSpace: 'pre-line' }}>
          {ASHES.desc}
        </p>

        <div className="gallery">
          {ASHES.gallery.map((image) => (
            <img key={image} src={projectImage(image)} alt={`${ASHES.title} still`} />
          ))}
        </div>

        <h2>Credit</h2>
        <div className="credits">{ASHES.credits}</div>

        <h2>Festivals</h2>
        <div className="festivals">{ASHES.festivals}</div>

        <div className="pnav">
          <Link to={prevPath}>Previous</Link>
          <Link to={listPath}>To List</Link>
          <Link to={nextPath}>Next</Link>
        </div>
      </div>
    </PageLayout>
  )
}
