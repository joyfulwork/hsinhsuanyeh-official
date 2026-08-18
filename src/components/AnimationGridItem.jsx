import { Link } from './Link.jsx'
import { projectImage } from '../data/projects.js'
import { localizedPath } from '../data/site.js'
import { useLang } from '../i18n/LangProvider.jsx'

export function AnimationGridItem({ item }) {
  const { lang } = useLang()
  const inner = (
    <div className="item anim-item">
      <img className="anim-item__img" src={projectImage(item.image)} alt={item.alt} loading="lazy" />
      <div className="anim-item__overlay" aria-hidden="true" />
      <p className="anim-item__title">{item.title}</p>
    </div>
  )

  if (item.href) {
    return (
      <Link className="anim-item-link" to={localizedPath(item.href, lang)}>
        {inner}
      </Link>
    )
  }

  return inner
}
