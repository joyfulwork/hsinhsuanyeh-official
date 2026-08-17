import { createContext, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { alternateLangPath } from '../data/site.js'

const LangContext = createContext({ lang: 'en', togglePath: '/' })

export function LangProvider({ children }) {
  const { pathname } = useLocation()
  const lang = pathname.startsWith('/zh') ? 'zh' : 'en'

  const value = useMemo(
    () => ({
      lang,
      isZh: lang === 'zh',
      enPath: alternateLangPath(pathname, 'en'),
      zhPath: alternateLangPath(pathname, 'zh'),
      homePath: lang === 'zh' ? '/zh/' : '/',
    }),
    [lang, pathname],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
