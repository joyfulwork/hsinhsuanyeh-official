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
        <img
          className="photo-purple"
          src={projectImage('d18541_fffbaf53c65344d087a1af48b3abe42c~mv2.jpg')}
          alt=""
        />
        <img
          className="photo-main"
          src={projectImage('d18541_fffbaf53c65344d087a1af48b3abe42c~mv2.jpg')}
          alt={lang === 'zh' ? '葉信萱' : 'Hsin-Hsuan Yeh'}
        />
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
