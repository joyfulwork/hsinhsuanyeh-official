import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout.jsx'
import { Marquee } from '../components/Marquee.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { COMICS_GRID, projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

function GridItem({ item, lang }) {
  const image = <img src={projectImage(item.image)} alt={item.alt} />
  if (item.href) {
    return (
      <Link className="item" to={localizedPath(item.href, lang)}>
        {image}
      </Link>
    )
  }
  return <div className="item">{image}</div>
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
        <Marquee className="big m-grey">
          <span className="bubble g" />
          <span className="word">Comics</span>
          <span className="bubble g" />
          <span className="word">Comics</span>
        </Marquee>
      </div>

      <div className="grid cols-3">
        {COMICS_GRID.map((item) => (
          <GridItem key={item.image} item={item} lang={lang} />
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <Marquee className="big m-cream">
          <span className="bubble l" />
          <span className="word">Comics</span>
          <span className="bubble l" />
          <span className="word">Comics</span>
        </Marquee>
      </div>
    </PageLayout>
  )
}
