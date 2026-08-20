import { useEffect, useRef } from 'react'

function updateBubbleReveal(el) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const focal = rect.top + rect.height * 0.45
  const start = vh * 1.05
  const end = vh * 0.42
  const progress = Math.min(1, Math.max(0, (start - focal) / (start - end)))
  const blur = 9 * (1 - progress)
  const scale = 1.08 - progress * 0.08

  el.style.setProperty('--thumb-blur', `${blur}px`)
  el.style.setProperty('--thumb-scale', String(scale))
}

export function useBubbleScrollReveal() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const bubbles = section.querySelectorAll('[data-animate-blur]')

    // every scroll event forced a layout read + style write per bubble; coalesce
    // them into one frame so a fling doesn't thrash
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        bubbles.forEach(updateBubbleReveal)
      })
    }

    bubbles.forEach(updateBubbleReveal)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return sectionRef
}
