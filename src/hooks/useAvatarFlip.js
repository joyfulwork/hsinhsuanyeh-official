import { useEffect, useRef } from 'react'

export function useAvatarFlip(intervalMs = 700) {
  const frameRef = useRef(0)

  useEffect(() => {
    const frames = document.querySelectorAll('.avatar-wrap .frames img')
    if (!frames.length) return undefined

    const id = window.setInterval(() => {
      frames[frameRef.current]?.classList.remove('on')
      frameRef.current = (frameRef.current + 1) % frames.length
      frames[frameRef.current]?.classList.add('on')
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [intervalMs])
}
