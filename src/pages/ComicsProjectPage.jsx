import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from '../components/Link.jsx'
import { Marquee, StarIcon } from '../components/Marquee.jsx'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { COMICS_DETAILS, COMICS_ORDER, projectImage } from '../data/projects.js'
import { PAGE_META } from '../data/meta.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function ComicsProjectPage() {
  const { slug } = useParams()
  const { lang, enPath, zhPath } = useLang()
  const project = COMICS_DETAILS[slug]
  const listPath = localizedPath('/comics/', lang)
  const pageMeta = PAGE_META[slug]?.[lang]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [slug, lang])

  usePageMeta({
    title: pageMeta?.title || project?.title || 'Comics | Hsin Hsuan Yeh',
    description: pageMeta?.description || project?.desc || 'Comics by Hsin-Hsuan Yeh.',
    ogImage: project ? `/assets/images/${pageMeta?.ogImage || project.hero}` : undefined,
    canonicalPath: project
      ? lang === 'zh'
        ? `/zh/comics/${slug}/`
        : `/comics/${slug}/`
      : listPath,
    enPath,
    zhPath,
    ogType: 'article',
  })

  if (!project) {
    return <Navigate to={listPath} replace />
  }

  const index = COMICS_ORDER.indexOf(slug)
  const prevSlug = index > 0 ? COMICS_ORDER[index - 1] : null
  const nextSlug = index >= 0 && index < COMICS_ORDER.length - 1 ? COMICS_ORDER[index + 1] : null
  const prevPath = prevSlug ? localizedPath(`/comics/${prevSlug}/`, lang) : null
  const nextPath = nextSlug ? localizedPath(`/comics/${nextSlug}/`, lang) : null

  const showPrevPage = activeIndex > 0
  const showNextPage = activeIndex < project.pages.length - 1

  return (
    <PageLayout activeKey="comics">
      <div className="comic-project">
        <div className="comic-project__inner">
          <div className="comic-project__hero">
            <img src={projectImage(project.hero)} alt={project.title} />
          </div>

          <div className="comic-detail">
            <div className="comic-detail__heading">
              <h1 className="comic-detail__title">{project.title}</h1>
              <span className="comic-detail__year">{project.year}</span>
            </div>
            <p className="comic-detail__meta">{project.meta}</p>
            <p className="comic-detail__desc">{project.desc}</p>
          </div>
        </div>

        <div id="read" className="comic-reader">
          <Marquee className="comic-reader__marquee" duration="15.46875s">
            <StarIcon stroke="#ff5e1a" />
            <span className="word">CLICK TO READ</span>
          </Marquee>

          <div className="comic-project__inner">
            <div className="comic-reader__main">
              <img
                src={projectImage(project.pages[activeIndex])}
                alt={`${project.title} page ${activeIndex + 1}`}
                loading="lazy"
              />
              {showPrevPage ? (
                <button
                  className="comic-reader__arrow comic-reader__arrow--prev"
                  type="button"
                  onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                >
                  ‹
                </button>
              ) : null}
              {showNextPage ? (
                <button
                  className="comic-reader__arrow comic-reader__arrow--next"
                  type="button"
                  onClick={() => setActiveIndex((i) => Math.min(project.pages.length - 1, i + 1))}
                >
                  ›
                </button>
              ) : null}
            </div>

            <div className="pnav">
              {prevPath ? (
                <Link className="pnav__prev" to={prevPath}>
                  Previous
                </Link>
              ) : (
                <span className="pnav__prev" />
              )}
              <Link className="pnav__list" to={listPath}>
                To List
              </Link>
              {nextPath ? (
                <Link className="pnav__next" to={nextPath}>
                  Next
                </Link>
              ) : (
                <span className="pnav__next" />
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
