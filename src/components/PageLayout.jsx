import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar, LangToggle } from './SiteChrome.jsx'

export function PageLayout({ activeKey, isHome = false, children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.classList.toggle('home', isHome)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    return () => document.body.classList.remove('home')
  }, [pathname, isHome])

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
