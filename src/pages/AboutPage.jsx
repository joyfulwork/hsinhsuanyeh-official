import { PageLayout } from '../components/PageLayout.jsx'
import { useJsonLd, usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { ABOUT, projectImage } from '../data/projects.js'
import { SITE, SOCIALS, img } from '../data/site.js'
import { useLang } from '../i18n/LangProvider.jsx'

export default function AboutPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.about[lang]
  const copy = ABOUT[lang]

  usePageMeta({
    ...meta,
    canonicalPath: lang === 'zh' ? '/zh/about-contact/' : '/about-contact/',
    enPath,
    zhPath,
    ogImage: '/assets/images/d18541_fffbaf53c65344d087a1af48b3abe42c~mv2.jpg',
  })

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hsin-Hsuan Yeh',
    alternateName: '葉信萱',
    jobTitle: 'Animation Director',
    email: SITE.email,
    url: SITE.domain,
    sameAs: SOCIALS.map(([, href]) => href),
  })

  return (
    <PageLayout activeKey="about">
      <div className="about">
        <img className="onion" src={projectImage('d18541_9dfa5ad846f44ab9af3d2bc99998bae8~mv2.png')} alt="" />
        <svg width="0" height="0" aria-hidden="true" className="about-filters">
          <filter id="about-purple" colorInterpolationFilters="sRGB">
            <feColorMatrix type="saturate" values="0" />
            <feColorMatrix
              type="matrix"
              values="0.6196078431372549 0 0 0 0.37254901960784315 0.807843137254902 0 0 0 0 0.07843137254901955 0 0 0 0.6784313725490196 0 0 0 1 0"
            />
          </filter>
        </svg>
        <div className="photo-purple">
          <img src={projectImage('about-photo-purple.jpg')} alt="" />
        </div>
        <div className="photo-main">
          <img
            src={projectImage('about-photo-main.jpg')}
            alt={lang === 'zh' ? '葉信萱' : 'Hsin-Hsuan Yeh'}
          />
          <div className="photo-accent">
            <img src={projectImage('about-photo-accent.jpg')} alt="" />
          </div>
        </div>
        <div className="bio">
          <h1>
            {copy.nameLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < copy.nameLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <a className="email" href={`mailto:${SITE.email}`}>
            ✉️ {SITE.email}
          </a>
          <div className="roles">{copy.roles}</div>
          <p>{copy.bio}</p>
          <div className="socials">
            {SOCIALS.map(([label, href, icon]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <img src={img(icon)} alt={label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
