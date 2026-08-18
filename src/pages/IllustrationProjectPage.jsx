import { Navigate, useParams } from 'react-router-dom'
import { Link } from '../components/Link.jsx'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { ILLUSTRATION_DETAILS, ILLUSTRATION_ORDER, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function IllustrationProjectPage() {
  const { slug } = useParams()
  const { lang, enPath, zhPath } = useLang()
  const project = ILLUSTRATION_DETAILS[slug]
  const listPath = localizedPath('/illustration/', lang)
  const meta = project?.meta?.[lang]

  usePageMeta({
    title: meta?.title || 'Illustration | Hsin Hsuan Yeh',
    description: meta?.description || 'Illustration by Hsin-Hsuan Yeh.',
    ogImage: project ? `/assets/images/${project.hero}` : undefined,
    canonicalPath: project
      ? lang === 'zh'
        ? `/zh/illustration/${slug}/`
        : `/illustration/${slug}/`
      : listPath,
    enPath,
    zhPath,
    ogType: 'article',
  })

  if (!project) {
    return <Navigate to={listPath} replace />
  }

  const index = ILLUSTRATION_ORDER.indexOf(slug)
  const prevSlug = index > 0 ? ILLUSTRATION_ORDER[index - 1] : null
  const nextSlug = index >= 0 && index < ILLUSTRATION_ORDER.length - 1 ? ILLUSTRATION_ORDER[index + 1] : null
  const prevPath = prevSlug ? localizedPath(`/illustration/${prevSlug}/`, lang) : null
  const nextPath = nextSlug ? localizedPath(`/illustration/${nextSlug}/`, lang) : null
  const extras = (project.gallery || []).filter((image) => image !== project.hero)

  return (
    <PageLayout activeKey="illustration">
      <div className="project">
        <img className="hero-img" src={projectImage(project.hero)} alt={project.title} />
        <h1>{project.title}</h1>
        {extras.length ? (
          <div className="project-gallery">
            {extras.map((image) => (
              <img key={image} src={projectImage(image)} alt={`${project.title} still`} loading="lazy" />
            ))}
          </div>
        ) : null}

        <div className="pnav">
          {prevPath ? <Link to={prevPath}>Previous</Link> : <span />}
          <Link to={listPath}>To List</Link>
          {nextPath ? <Link to={nextPath}>Next</Link> : <span />}
        </div>
      </div>
    </PageLayout>
  )
}
