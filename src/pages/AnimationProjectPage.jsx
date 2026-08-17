import { Link, Navigate, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout.jsx'
import { ProjectMedia, ProjectVimeoEmbed } from '../components/ProjectMedia.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { ANIMATION_DETAILS, ANIMATION_ORDER, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function AnimationProjectPage() {
  const { slug } = useParams()
  const { lang, enPath, zhPath } = useLang()
  const project = ANIMATION_DETAILS[slug]
  const listPath = localizedPath('/animation/', lang)
  const meta = project?.meta?.[lang]

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

  const index = ANIMATION_ORDER.indexOf(slug)
  const prevSlug = index > 0 ? ANIMATION_ORDER[index - 1] : null
  const nextSlug = index >= 0 && index < ANIMATION_ORDER.length - 1 ? ANIMATION_ORDER[index + 1] : null
  const prevPath = prevSlug ? localizedPath(`/animation/${prevSlug}/`, lang) : null
  const nextPath = nextSlug ? localizedPath(`/animation/${nextSlug}/`, lang) : null

  return (
    <PageLayout activeKey="animation">
      <div className="project">
        <img className="hero-img" src={projectImage(project.hero)} alt={project.title} />
        <h1>{project.title}</h1>
        {project.metaLine ? <p className="meta">{project.metaLine}</p> : null}
        {project.watch ? (
          <a className="watch" href={project.watch} target="_blank" rel="noopener noreferrer">
            Watch
          </a>
        ) : null}
        {project.embedVimeo ? <ProjectVimeoEmbed watch={project.watch} title={project.title} /> : null}
        {project.desc ? (
          <p className="desc" style={{ whiteSpace: 'pre-line' }}>
            {project.desc}
          </p>
        ) : null}

        <ProjectMedia media={project.media} title={project.title} />

        {project.credits ? (
          <>
            <h2>Credit</h2>
            <div className="credits">{project.credits}</div>
          </>
        ) : null}

        {project.festivals ? (
          <>
            <h2>Festivals</h2>
            <div className="festivals">{project.festivals}</div>
          </>
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
