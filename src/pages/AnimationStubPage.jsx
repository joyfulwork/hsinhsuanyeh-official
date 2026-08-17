import { Link, Navigate, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { ANIMATION_STUBS, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function AnimationStubPage() {
  const { slug } = useParams()
  const { lang, enPath, zhPath } = useLang()
  const project = ANIMATION_STUBS[slug]
  const listPath = localizedPath('/animation/', lang)
  const meta = project?.meta[lang]

  usePageMeta({
    title: meta?.title || 'Animation | Hsin Hsuan Yeh',
    description: meta?.description || 'Animation by Hsin-Hsuan Yeh.',
    ogImage: project ? `/assets/images/${project.hero}` : undefined,
    canonicalPath: project
      ? lang === 'zh'
        ? `/zh/animation/${slug}/`
        : `/animation/${slug}/`
      : listPath,
    enPath,
    zhPath,
    ogType: 'article',
  })

  if (!project) {
    return <Navigate to={listPath} replace />
  }

  return (
    <PageLayout activeKey="animation">
      <div className="project">
        <img className="hero-img" src={projectImage(project.hero)} alt={project.title} />
        <h1>{project.title}</h1>
        {project.subtitle ? <p className="meta">{project.subtitle}</p> : null}
        {project.desc ? <p className="desc">{project.desc}</p> : null}

        <div className="pnav">
          <Link to={listPath}>To List</Link>
        </div>
      </div>
    </PageLayout>
  )
}
