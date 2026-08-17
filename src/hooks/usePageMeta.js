import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE } from '../data/site.js'

function upsertMeta(attr, key, value) {
  if (!value) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function upsertLink(rel, href, extra = {}) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function usePageMeta({
  title,
  description,
  ogTitle,
  ogImage,
  ogType = 'website',
  canonicalPath,
  enPath,
  zhPath,
  noindex = false,
}) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title

    if (description) upsertMeta('name', 'description', description)

    const canonical = canonicalPath
      ? `${SITE.domain}${canonicalPath}`
      : `${SITE.domain}${pathname.endsWith('/') ? pathname : `${pathname}/`}`

    upsertLink('canonical', canonical)
    upsertMeta('property', 'og:title', ogTitle || title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:type', ogType)
    upsertMeta(
      'property',
      'og:image',
      ogImage?.startsWith('http') ? ogImage : `${SITE.domain}${ogImage || SITE.defaultOgImage}`,
    )
    upsertMeta('name', 'twitter:title', ogTitle || title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta(
      'name',
      'twitter:image',
      ogImage?.startsWith('http') ? ogImage : `${SITE.domain}${ogImage || SITE.defaultOgImage}`,
    )

    if (enPath) upsertLink('alternate', `${SITE.domain}${enPath}`, { hreflang: 'en' })
    if (zhPath) upsertLink('alternate', `${SITE.domain}${zhPath}`, { hreflang: 'zh-Hant' })
    if (enPath && zhPath) {
      upsertLink('alternate', `${SITE.domain}${enPath}`, { hreflang: 'x-default' })
    }

    let robots = document.querySelector('meta[name="robots"]')
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex,nofollow')
    } else if (robots) {
      robots.remove()
    }

    document.documentElement.lang = pathname.startsWith('/zh') ? 'zh-Hant' : 'en'
  }, [title, description, ogTitle, ogImage, ogType, canonicalPath, enPath, zhPath, noindex, pathname])
}

export function useJsonLd(data) {
  useEffect(() => {
    if (!data) return undefined
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
    return () => script.remove()
  }, [data])
}
