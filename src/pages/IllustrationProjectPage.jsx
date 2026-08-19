import { useEffect, useRef, useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const mainRef = useRef(null)
  const [thumbsHeight, setThumbsHeight] = useState(null)

  useEffect(() => {
    setActiveIndex(0)
  }, [slug])

  useEffect(() => {
    const mainEl = mainRef.current
    if (!mainEl) {
      setThumbsHeight(null)
      return undefined
    }

    const syncHeight = () => {
      setThumbsHeight(mainEl.getBoundingClientRect().height || null)
    }

    syncHeight()

    const observer = new ResizeObserver(syncHeight)
    observer.observe(mainEl)
    window.addEventListener('resize', syncHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncHeight)
    }
  }, [slug, activeIndex])

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
  const slides = [project.hero, ...(project.gallery || []).filter((image) => image !== project.hero)]

  const showPrevSlide = activeIndex > 0
  const showNextSlide = activeIndex < slides.length - 1

  const goPrevSlide = () => {
    setActiveIndex((current) => Math.max(0, current - 1))
  }

  const goNextSlide = () => {
    setActiveIndex((current) => Math.min(slides.length - 1, current + 1))
  }

  return (
    <PageLayout activeKey="illustration">
      <div className="project">
        <div className="project__hero project__hero--illustration">
          <img src={projectImage(project.hero)} alt={project.title} />
        </div>
        <div className="project__body">
          <div className="illus-detail">
            <h1 className="project__title">{project.title}</h1>
            {slides.length ? (
              <div className="illus-carousel">
                <div ref={mainRef} className="illus-carousel__main">
                  <img
                    src={projectImage(slides[activeIndex])}
                    alt={`${project.title} slide ${activeIndex + 1}`}
                    loading="lazy"
                  />
                  {showPrevSlide ? (
                    <button className="illus-carousel__arrow illus-carousel__arrow--prev" type="button" onClick={goPrevSlide}>
                      ‹
                    </button>
                  ) : null}
                  {showNextSlide ? (
                    <button className="illus-carousel__arrow illus-carousel__arrow--next" type="button" onClick={goNextSlide}>
                      ›
                    </button>
                  ) : null}
                </div>
                {slides.length > 1 ? (
                  <div
                    className="illus-carousel__thumbs"
                    aria-label="Illustration gallery thumbnails"
                    style={thumbsHeight ? { maxHeight: `${Math.round(thumbsHeight)}px` } : undefined}
                  >
                    {slides.map((image, idx) => (
                      <button
                        key={image}
                        type="button"
                        className={`illus-carousel__thumb${idx === activeIndex ? ' is-active' : ''}`}
                        onClick={() => setActiveIndex(idx)}
                      >
                        <img src={projectImage(image)} alt="" loading="lazy" />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="pnav">
            {prevPath ? <Link className="pnav__prev" to={prevPath}>Previous</Link> : null}
            <Link className="pnav__list" to={listPath}>To List</Link>
            {nextPath ? <Link className="pnav__next" to={nextPath}>Next</Link> : null}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
