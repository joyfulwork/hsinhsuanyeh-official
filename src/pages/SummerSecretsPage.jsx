import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { SUMMER_SECRETS, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function SummerSecretsPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.summerSecrets[lang]
  const listPath = localizedPath('/illustration/', lang)
  const [hero, ...rest] = SUMMER_SECRETS.images

  usePageMeta({
    ...meta,
    ogImage: `/assets/images/${meta.ogImage}`,
    canonicalPath: lang === 'zh' ? '/zh/illustration/summer-secrets/' : '/illustration/summer-secrets/',
    enPath,
    zhPath,
    ogType: 'article',
  })

  return (
    <PageLayout activeKey="illustration">
      <div className="project">
        <h1>{SUMMER_SECRETS.title}</h1>
        <img
          className="hero-img"
          src={projectImage(hero)}
          alt={SUMMER_SECRETS.title}
          style={{ marginTop: '24px' }}
        />
        <div style={{ display: 'grid', gap: '24px' }}>
          {rest.map((image) => (
            <img key={image} src={projectImage(image)} alt={SUMMER_SECRETS.title} />
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
