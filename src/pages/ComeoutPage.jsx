import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { COMEOUT, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function ComeoutPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.comeout[lang]
  const listPath = localizedPath('/comics/', lang)

  usePageMeta({
    ...meta,
    ogImage: `/assets/images/${meta.ogImage}`,
    canonicalPath: lang === 'zh' ? '/zh/comics/comeout/' : '/comics/comeout/',
    enPath,
    zhPath,
    ogType: 'article',
  })

  return (
    <PageLayout activeKey="comics">
      <div className="project">
        <img className="hero-img" src={projectImage(COMEOUT.hero)} alt={COMEOUT.title} />
        <h1>{COMEOUT.title}</h1>
        <p className="meta">{COMEOUT.meta}</p>
        <p className="desc">{COMEOUT.desc}</p>
        <a className="watch" href="#read">
          Click to read
        </a>

        <div id="read" style={{ marginTop: '36px', display: 'grid', gap: '24px' }}>
          {COMEOUT.pages.map((image) => (
            <img key={image} src={projectImage(image)} alt={`${COMEOUT.title} page`} />
          ))}
        </div>

        <div className="pnav">
          <Link to={listPath}>Previous</Link>
          <Link to={listPath}>To List</Link>
          <Link to={listPath}>Next</Link>
        </div>
      </div>
    </PageLayout>
  )
}
