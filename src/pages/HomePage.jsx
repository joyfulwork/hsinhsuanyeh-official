import { Link } from '../components/Link.jsx'
import { PageLayout } from '../components/PageLayout.jsx'
import { MarqueeStrip } from '../components/Marquee.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useBubbleScrollReveal } from '../hooks/useBubbleScrollReveal.js'
import { PAGE_META } from '../data/meta.js'
import { HOME_BUBBLES, projectImage } from '../data/projects.js'
import { WIX_HOME } from '../data/wix-home.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'
import { maskUrl } from '../utils/maskUrl.js'

const LEMON = WIX_HOME.bubbles.find((b) => b.alt === 'Lemon')

const MASK_BY_IMAGE = Object.fromEntries(
  WIX_HOME.bubbles.filter((b) => b.maskImage).map((b) => [b.image, b.maskImage]),
)

function bubbleStyle(bubble) {
  const maskImage = bubble.maskImage || MASK_BY_IMAGE[bubble.image]
  const mask = maskUrl(maskImage)
  return {
    ...bubble.style,
    ...(mask ? { '--bubble-mask': mask } : {}),
    ...(bubble.rotate != null ? { transform: `rotate(${bubble.rotate}deg)` } : {}),
  }
}

function HomeBubble({ bubble, lang }) {
  const maskImage = bubble.maskImage || MASK_BY_IMAGE[bubble.image]
  const className = `bubble-thumb${maskImage ? ' has-mask' : ''}`
  const style = bubbleStyle(bubble)
  const image = <img src={projectImage(bubble.image)} alt={bubble.alt} loading="lazy" />

  if (bubble.static) {
    return (
      <span className={className} style={style} data-animate-blur>
        {image}
      </span>
    )
  }

  return (
    <Link
      className={className}
      to={localizedPath(bubble.href, lang)}
      style={style}
      data-animate-blur
    >
      {image}
    </Link>
  )
}

export default function HomePage() {
  const { lang, enPath, zhPath } = useLang()
  const gooseRef = useBubbleScrollReveal()
  const meta = PAGE_META.home[lang]

  usePageMeta({
    ...meta,
    canonicalPath: lang === 'zh' ? '/zh/' : '/',
    enPath,
    zhPath,
    ogImage: `/assets/images/${WIX_HOME.pig}`,
  })

  const tbc =
    lang === 'zh' ? (
      '製 作 中'
    ) : (
      <>
        To Be
        <br />
        Continued
      </>
    )

  return (
    <PageLayout isHome>
      <div className="hero">
        <div className="hero__stage">
          <img className="pig" src={projectImage(WIX_HOME.pig)} alt="" />
          <Link className="badge-wrap" to={localizedPath(WIX_HOME.badge.href, lang)}>
            <img
              className="badge-default"
              src={projectImage(WIX_HOME.badge.image)}
              alt="Sense of Nowhere"
            />
            <img className="badge-hover" src={projectImage(WIX_HOME.badge.hoverImage)} alt="" />
          </Link>
        </div>
      </div>

      <div className="goose-sec" ref={gooseRef}>
        <img className="goose" src={projectImage(WIX_HOME.goose)} alt="" />

        <div className="strip s1">
          <MarqueeStrip />
        </div>
        <div className="strip s2">
          <MarqueeStrip variant="green" dark />
        </div>
        <div className="strip s3">
          <MarqueeStrip />
        </div>

        {HOME_BUBBLES.map((bubble) => (
          <HomeBubble key={bubble.alt} bubble={bubble} lang={lang} />
        ))}

        <h2 className="tbc">{tbc}</h2>

        {LEMON ? (
          <Link
            className="lemon has-mask"
            to={localizedPath('/about-contact/', lang)}
            style={{
              '--bubble-mask': maskUrl(LEMON.maskImage),
              left: '71.4%',
              top: '70.3%',
              width: '15.2%',
              aspectRatio: '1',
            }}
          >
            <img src={projectImage('lemon-home.jpg')} alt="Hsin-Hsuan Yeh" loading="lazy" />
          </Link>
        ) : null}
      </div>
    </PageLayout>
  )
}
