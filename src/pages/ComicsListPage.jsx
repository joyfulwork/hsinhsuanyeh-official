import { Link } from '../components/Link.jsx'
import { PageLayout } from '../components/PageLayout.jsx'
import { Marquee, ComicsBubbleIcon } from '../components/Marquee.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { COMICS_GRID, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

function GridItem({ item, lang }) {
  const inner = (
    <>
      <img className="anim-item__img" src={projectImage(item.image)} alt={item.alt} />
      <div className="anim-item__overlay" aria-hidden="true" />
      {item.alt ? <p className="anim-item__title">{item.alt}</p> : null}
    </>
  )

  if (item.href) {
    return (
      <Link className="item anim-item" to={localizedPath(item.href, lang)}>
        {inner}
      </Link>
    )
  }

  return <div className="item anim-item">{inner}</div>
}

export default function ComicsListPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.comics[lang]

  usePageMeta({
    ...meta,
    canonicalPath: lang === 'zh' ? '/zh/comics/' : '/comics/',
    enPath,
    zhPath,
  })

  return (
    <PageLayout activeKey="comics">
      <div style={{ marginTop: '90px' }}>
        <Marquee className="big m-grey" duration="17.041666666666668s">
          <span className="word">Comics</span>
          <ComicsBubbleIcon />
        </Marquee>
      </div>

      <div className="grid cols-3 comics-grid">
        {COMICS_GRID.map((item) => (
          <GridItem key={item.image} item={item} lang={lang} />
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <Marquee className="big m-cream" duration="17.041666666666668s">
          <span className="word">Comics</span>
          <ComicsBubbleIcon />
        </Marquee>
      </div>
    </PageLayout>
  )
}
