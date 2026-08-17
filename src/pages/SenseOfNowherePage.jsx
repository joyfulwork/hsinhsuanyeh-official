import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { VR_SON, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'

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

  return (
    <PageLayout activeKey="vr">
      <div className="project" style={{ maxWidth: '1080px' }}>
        <h1>Sense Of Nowhere</h1>
        <p className="desc">{copy.intro}</p>
        <p className="meta">{copy.meta}</p>
        <p className="meta" style={{ color: 'var(--orange)' }}>
          {copy.scrollHint}
        </p>

        <img className="hero-img" src={projectImage(VR_SON.hero)} alt="Sense Of Nowhere" />

        <video
          src="/assets/videos/son-teaser.mp4"
          controls
          muted
          loop
          playsInline
          poster={projectImage(VR_SON.poster)}
        />

        <h2>{copy.makingOf}</h2>
        <h3 style={{ fontWeight: 400, margin: '18px 0 10px' }}>{copy.concept}</h3>
        <div className="gallery">
          {VR_SON.conceptImages.map((image) => (
            <img key={image} src={projectImage(image)} alt={copy.concept} />
          ))}
        </div>

        <h3 style={{ fontWeight: 400, margin: '28px 0 10px' }}>{copy.clay}</h3>
        <div className="gallery">
          {VR_SON.clayImages.map((image) => (
            <img key={image} src={projectImage(image)} alt={copy.clay} />
          ))}
        </div>

        <h2>{copy.exhibition}</h2>
        <div className="exhibits">
          {VR_SON.exhibitions.map((ex) => (
            <div className="ex" key={ex.title}>
              <h3>{ex.title}</h3>
              <div className="when">{ex.when}</div>
              <div className="pics">
                {ex.images.map((image) => (
                  <img key={image} src={projectImage(image)} alt={ex.title} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2>{copy.credit}</h2>
        <div className="credits">{VR_SON.credits}</div>

        <p className="desc" style={{ marginTop: '32px', whiteSpace: 'pre-line' }}>
          {copy.footer}
        </p>
      </div>
    </PageLayout>
  )
}
