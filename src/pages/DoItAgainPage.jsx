import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { DO_IT_AGAIN, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function DoItAgainPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.doitagain[lang]

  usePageMeta({
    ...meta,
    ogImage: `/assets/images/${meta.ogImage}`,
    canonicalPath: lang === 'zh' ? '/zh/animation/doitagain/' : '/animation/doitagain/',
    enPath,
    zhPath,
    ogType: 'article',
  })

  const listPath = localizedPath('/animation/', lang)
  const ashesPath = localizedPath('/animation/ashes/', lang)

  return (
    <PageLayout activeKey="animation">
      <div className="project">
        <img className="hero-img" src={projectImage(DO_IT_AGAIN.hero)} alt={DO_IT_AGAIN.title} />
        <h1>{DO_IT_AGAIN.title}</h1>
        <p className="meta">{DO_IT_AGAIN.meta}</p>
        <a className="watch" href={DO_IT_AGAIN.watch} target="_blank" rel="noopener noreferrer">
          Watch
        </a>
        <p className="desc">{DO_IT_AGAIN.desc}</p>

        <div className="gallery">
          {DO_IT_AGAIN.gallery.map((image) => (
            <img key={image} src={projectImage(image)} alt={`${DO_IT_AGAIN.title} still`} />
          ))}
        </div>

        <h2>Credit</h2>
        <div className="credits">{DO_IT_AGAIN.credits}</div>

        <h2>Festivals</h2>
        <div className="festivals">{DO_IT_AGAIN.festivals}</div>

        <div className="pnav">
          <Link to={ashesPath}>Previous</Link>
          <Link to={listPath}>To List</Link>
          <Link to={ashesPath}>Next</Link>
        </div>
      </div>
    </PageLayout>
  )
}
