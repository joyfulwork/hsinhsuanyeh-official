import { useEffect, useState } from 'react'
import { Link } from '../components/Link.jsx'
import { Marquee, StarIcon } from '../components/Marquee.jsx'
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
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [lang])

  usePageMeta({
    ...meta,
    ogImage: `/assets/images/${meta.ogImage}`,
    canonicalPath: lang === 'zh' ? '/zh/comics/comeout/' : '/comics/comeout/',
    enPath,
    zhPath,
    ogType: 'article',
  })

  const year = COMEOUT.meta.split(' · ')[0] || '2021'
  const metaLine = COMEOUT.meta.replace(`${year} · `, '')
  const showPrevPage = activeIndex > 0
  const showNextPage = activeIndex < COMEOUT.pages.length - 1

  return (
    <PageLayout activeKey="comics">
      <div className="project">
        <div className="project__hero project__hero--comics">
          <img src={projectImage(COMEOUT.hero)} alt={COMEOUT.title} />
        </div>
        <div className="project__body">
          <div className="comic-detail">
            <div className="comic-detail__heading">
              <h1 className="comic-detail__title">{COMEOUT.title}</h1>
              <span className="comic-detail__year">{year}</span>
            </div>
            <p className="comic-detail__meta">{metaLine}</p>
            <p className="comic-detail__desc">{COMEOUT.desc}</p>
          </div>

          <div id="read" className="comic-reader">
            <Marquee className="comic-reader__marquee" duration="15.46875s">
              <StarIcon stroke="#ff5e1a" />
              <span className="word">CLICK TO READ</span>
            </Marquee>

            <div className="comic-reader__main">
              <img
                src={projectImage(COMEOUT.pages[activeIndex])}
                alt={`${COMEOUT.title} page ${activeIndex + 1}`}
                loading="lazy"
              />
              {showPrevPage ? (
                <button className="comic-reader__arrow comic-reader__arrow--prev" type="button" onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}>
                  ‹
                </button>
              ) : null}
              {showNextPage ? (
                <button className="comic-reader__arrow comic-reader__arrow--next" type="button" onClick={() => setActiveIndex((i) => Math.min(COMEOUT.pages.length - 1, i + 1))}>
                  ›
                </button>
              ) : null}
            </div>
          </div>

          <div className="pnav">
            <span className="pnav__prev" />
            <Link className="pnav__list" to={listPath}>To List</Link>
            <span className="pnav__next" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
