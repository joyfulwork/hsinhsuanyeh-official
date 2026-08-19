import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar, LangToggle } from './SiteChrome.jsx'

export function PageLayout({ activeKey, isHome = false, fullBleed = false, children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.classList.toggle('home', isHome)
    document.body.classList.toggle('full-bleed', fullBleed)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    return () => document.body.classList.remove('home', 'full-bleed')
  }, [pathname, isHome, fullBleed])

  return (
    <>
      <Sidebar activeKey={activeKey} />
      <LangToggle />
      <div className="page">
        <div className="content">{children}</div>
      </div>
    </>
  )
}
