import { Link } from 'react-router-dom'
import { AVATAR_FRAMES, NAV, SOCIALS, img } from '../data/site.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { useAvatarFlip } from '../hooks/useAvatarFlip.js'

export function Sidebar({ activeKey }) {
  const { lang, homePath } = useLang()
  useAvatarFlip()

  return (
    <div className="sidebar">
      <Link className="logo" to={homePath}>
        Hsin
        <br />
        Hsuan
        <br />
        Yeh
      </Link>
      <div className="avatar-wrap">
        <span className="avatar-label">animation Director</span>
        <div className="frames">
          {AVATAR_FRAMES.map((frame, index) => (
            <img key={frame} src={img(frame)} alt="" className={index === 0 ? 'on' : ''} />
          ))}
        </div>
      </div>
      <nav className="nav" aria-label="Main">
        <span className="dot">◔</span>
        {NAV[lang].map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={activeKey === item.key ? 'active' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="socials">
        {SOCIALS.map(([label, href, icon]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            <img src={img(icon)} alt={label} />
          </a>
        ))}
      </div>
    </div>
  )
}

export function LangToggle() {
  const { lang, enPath, zhPath } = useLang()

  return (
    <div className="lang">
      <Link to={enPath} className={lang === 'en' ? 'cur' : undefined}>
        English
      </Link>
      <Link to={zhPath} className={lang === 'zh' ? 'cur' : undefined}>
        中文
      </Link>
    </div>
  )
}
