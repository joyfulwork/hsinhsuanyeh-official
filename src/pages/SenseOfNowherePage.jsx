import { useCallback, useEffect, useRef, useState } from 'react'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { VR_SON, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'

const EX_GAP = 12
const EX_MAX_HEIGHT = 340

// ponytail: exhibit photos have different aspect ratios. 2-image exhibits are a
// justified row (fill the width, equal height, no crop). 3-image exhibits use the
// site's "2 stacked on the left + 1 tall on the right" layout, solved so the tall
// image's height matches the stacked column's total height and the row still fills
// the container width exactly.
function ExPics({ images, title }) {
  const containerRef = useRef(null)
  const ratios = useRef(new Map())
  const [layout, setLayout] = useState(null)

  const recalc = useCallback(() => {
    const el = containerRef.current
    if (!el || ratios.current.size < images.length) return
    const w = el.clientWidth

    if (images.length === 3) {
      const [r0, r1, r2] = [ratios.current.get(0), ratios.current.get(1), ratios.current.get(2)]
      const x = (w - EX_GAP * (1 + r2)) / (1 + r2 * (1 / r0 + 1 / r1))
      const h0 = x / r0
      const h1 = x / r1
      const stackHeight = h0 + h1 + EX_GAP
      setLayout({ mode: 'stack', leftWidth: x, heights: [h0, h1], rightWidth: stackHeight * r2, rightHeight: stackHeight })
    } else {
      const sum = [...ratios.current.values()].reduce((a, b) => a + b, 0)
      const available = w - EX_GAP * (images.length - 1)
      setLayout({ mode: 'row', height: Math.min(available / sum, EX_MAX_HEIGHT) })
    }
  }, [images.length])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(recalc)
    observer.observe(el)
    return () => observer.disconnect()
  }, [recalc])

  const onLoad = (index) => (event) => {
    ratios.current.set(index, event.target.naturalWidth / event.target.naturalHeight)
    recalc()
  }

  if (layout?.mode === 'stack') {
    return (
      <div className="son__ex-pics" ref={containerRef}>
        <div className="son__ex-pics-stack" style={{ width: layout.leftWidth, gap: EX_GAP }}>
          {images.slice(0, 2).map((img, index) => (
            <img key={img} src={projectImage(img)} alt={title} loading="lazy" style={{ height: layout.heights[index], width: layout.leftWidth }} onLoad={onLoad(index)} />
          ))}
        </div>
        <img
          src={projectImage(images[2])}
          alt={title}
          loading="lazy"
          style={{ height: layout.rightHeight, width: layout.rightWidth }}
          onLoad={onLoad(2)}
        />
      </div>
    )
  }

  return (
    <div className="son__ex-pics" ref={containerRef}>
      {images.map((img, index) => (
        <img
          key={img}
          src={projectImage(img)}
          alt={title}
          loading="lazy"
          style={layout ? { height: layout.height, width: 'auto' } : undefined}
          onLoad={onLoad(index)}
        />
      ))}
    </div>
  )
}

export default function SenseOfNowherePage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.vrSon[lang]
  const copy = VR_SON[lang]

  usePageMeta({
    ...meta,
    ogImage: `/assets/images/${meta.ogImage}`,
    canonicalPath: lang === 'zh' ? '/zh/vr-son/' : '/vr-son/',
    enPath,
    zhPath,
    ogType: 'article',
  })

  // hero left side: clay pig sculpture (conceptImages[0])
  const heroPig = VR_SON.conceptImages[0]
  // hero right side: VR screenshots (conceptImages[1..3])
  const heroSideImages = VR_SON.conceptImages.slice(1, 4)
  // concept art paintings (clayImages[1..2])
  const conceptArt = VR_SON.clayImages.slice(1, 3)
  // clay sculpture photos (clayImages[3..5])
  const claySculptures = VR_SON.clayImages.slice(3, 6)
  // making-of right side figure (clayImages[0] = pig sculpture)
  const makingOfFigure = VR_SON.clayImages[0]

  return (
    <PageLayout activeKey="vr" fullBleed>
      <div className="son">

        {/* ── Hero ── */}
        <section className="son__hero">
          <div className="son__hero-left">
            <img className="son__hero-bg" src={projectImage(VR_SON.hero)} alt="Sense Of Nowhere" />
            <div className="son__hero-text">
              <span className="son__vr-label">{copy.meta.split('·')[0].trim()}</span>
              <h1>Sense Of Nowhere</h1>
              <p className="son__intro">{copy.intro}</p>
            </div>
            <div className="son__hero-footer">
              <span className="son__meta-tags">{copy.meta.split('·')[1]?.trim()}</span>
              <span className="son__scroll-hint">{copy.scrollHint}</span>
            </div>
            <img className="son__hero-pig" src={projectImage(heroPig)} alt="Clay sculpture" />
          </div>
          <div className="son__hero-right">
            {heroSideImages.map((img) => (
              <img key={img} src={projectImage(img)} alt="Sense Of Nowhere scene" />
            ))}
          </div>
        </section>

        {/* ── Making Of ── */}
        <section className="son__section">
          <h2 className="son__h2">{copy.makingOf}</h2>
          <div className="son__making-of">
            <video
              className="son__video"
              controls
              muted
              loop
              playsInline
              poster={projectImage(VR_SON.poster)}
            >
              <source src="/assets/videos/son-teaser.mp4" type="video/mp4" />
            </video>
            <img src={projectImage(makingOfFigure)} alt="Making Of" loading="lazy" />
          </div>
        </section>

        {/* ── Concept ── */}
        <section className="son__section">
          <h2 className="son__h2">{copy.concept}</h2>
          <div className="son__two-col">
            {conceptArt.map((img) => (
              <img key={img} src={projectImage(img)} alt={copy.concept} loading="lazy" />
            ))}
          </div>
        </section>

        {/* ── Clay Sculpturing ── */}
        <section className="son__section">
          <h2 className="son__h2">{copy.clay}</h2>
          <div className="son__three-col">
            {claySculptures.map((img) => (
              <img key={img} src={projectImage(img)} alt={copy.clay} loading="lazy" />
            ))}
          </div>
        </section>

        {/* ── Exhibition ── */}
        <section className="son__section">
          <h2 className="son__h2">{copy.exhibition}</h2>
          {VR_SON.exhibitions.map((ex) => (
            <div className="son__ex" key={ex.title}>
              <div className="son__ex-info">
                <h3 className="son__ex-title">{ex.title}</h3>
                <p className="son__ex-when">{ex.when}</p>
              </div>
              <ExPics images={ex.images} title={ex.title} />
            </div>
          ))}
        </section>

        {/* ── Credit ── */}
        <section className="son__section">
          <h2 className="son__h2">{copy.credit}</h2>
          <div className="son__credits">
            {VR_SON.credits.split('\n').map((line, i) => {
              if (line.trim() === '|||COLUMN_BREAK|||') return <div key={i} className="son__credit-break" />
              if (!line.trim()) return <div key={i} className="son__credit-spacer" />
              // space prefix = name-only row; tabs after space = indent level
              if (line.startsWith(' \t')) {
                const rest = line.slice(1) // remove leading space
                const nameIndent = rest.match(/^(\t*)/)[1].length
                const nameText = rest.slice(nameIndent)
                return (
                  <div key={i} className="son__credit-row" style={{ paddingLeft: nameIndent * 20 }}>
                    <span className="son__credit-role" />
                    <span className="son__credit-name">{nameText}</span>
                  </div>
                )
              }
              
              // count leading tabs for indent level
              const indent = line.match(/^(\t*)/)[1].length
              const content = line.slice(indent)
              // split remaining content on first tab to get role / name
              const tabIdx = content.indexOf('\t')
              const role = tabIdx === -1 ? content : content.slice(0, tabIdx)
              const name = tabIdx === -1 ? '' : content.slice(tabIdx + 1)
              const isChapter = /^Chapter\s/i.test(role)
              return (
                <div
                  key={i}
                  className={`son__credit-row${isChapter ? ' son__credit-chapter' : ''}`}
                  style={{ paddingLeft: indent * 20 }}
                >
                  <span className="son__credit-role">{role}</span>
                  {name && <span className="son__credit-name">{name}</span>}
                </div>
              )
            })}
          </div>
          <p className="son__footer">{copy.footer}</p>
        </section>

      </div>
    </PageLayout>
  )
}
