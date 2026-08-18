import { useLayoutEffect, useRef, useState } from 'react'

export function Marquee({ className = '', duration, pxPerSec, children }) {
  const wrapRef = useRef(null)
  const unitRef = useRef(null)
  const trackRef = useRef(null)
  const [copies, setCopies] = useState(3)

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const unit = unitRef.current
    const track = trackRef.current
    if (!wrap || !unit?.offsetWidth || !track) return undefined

    const apply = () => {
      if (!unit.offsetWidth) return
      const nextCopies = Math.max(2, Math.ceil(wrap.offsetWidth / unit.offsetWidth))
      if (nextCopies !== copies) {
        setCopies(nextCopies)
        return
      }
      if (!pxPerSec) return
      const groupWidth = track.scrollWidth / 2
      if (groupWidth > 0) {
        track.style.setProperty('--marquee-duration', `${groupWidth / pxPerSec}s`)
      }
    }

    apply()
    const observer = new ResizeObserver(apply)
    observer.observe(wrap)
    const fontsReady = document.fonts?.ready?.then(apply)
    return () => {
      observer.disconnect()
      fontsReady?.catch(() => {})
    }
  }, [children, copies, pxPerSec])

  const units = Array.from({ length: copies }, (_, index) => (
    <span key={index} ref={index === 0 ? unitRef : undefined} className="marquee-unit">
      {children}
    </span>
  ))

  return (
    <div className={`marquee ${className}`.trim()} ref={wrapRef}>
      <div
        className="track"
        ref={trackRef}
        style={duration && !pxPerSec ? { '--marquee-duration': duration } : undefined}
      >
        <span>{units}</span>
        <span aria-hidden="true">
          {Array.from({ length: copies }, (_, index) => (
            <span key={`dup-${index}`} className="marquee-unit">
              {children}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}

const HOME_SEPARATOR_PATH =
  'M174.791 102.951l2.06-3.315c7.054-11.348 3.573-26.267-7.776-33.322l-3.314-2.06a24.197 24.197 0 0 1-10.79-15.051l-.887-3.801c-3.036-13.013-16.048-21.101-29.062-18.065l-3.8.887a24.192 24.192 0 0 1-18.272-3.014l-3.314-2.06c-11.35-7.054-26.269-3.574-33.323 7.776l-2.06 3.314a24.195 24.195 0 0 1-15.052 10.789l-3.8.887C32.388 48.953 24.3 61.965 27.336 74.979l.887 3.8a24.192 24.192 0 0 1-3.014 18.272l-2.06 3.314c-7.054 11.348-3.574 26.268 7.776 33.322l3.314 2.06a24.197 24.197 0 0 1 10.79 15.051l.887 3.8c3.036 13.013 16.048 21.101 29.062 18.065l3.799-.887a24.192 24.192 0 0 1 18.272 3.014l3.315 2.061c11.35 7.054 26.269 3.573 33.323-7.776l2.06-3.314a24.192 24.192 0 0 1 15.052-10.789l3.8-.887c13.013-3.036 21.102-16.047 18.065-29.062l-.887-3.8a24.2 24.192 0 0 1 3.014-18.272z'

const ANIMATION_BLOB_PATH =
  'M154.195 69.197c-6.615 22.845-1.702 42.971 2.319 53.87 3.96 10.734 4.046 22.731-.124 33.375-4.88 12.458-20.687 26.365-44.752 23.065-38.286-5.25-70.015-40.489-71.117-85.768-.86-35.333 25.59-62.853 55.806-71.912 4.532-1.359 9.462-1.944 14.482-1.808 24.939.676 52.075 19.167 43.386 49.178z'

const COMICS_BUBBLE_PATH =
  'M158.666 39H41.334C29.569 39 20 48.58 20 60.363v56.969c0 11.782 9.569 21.366 21.334 21.366h84.575l32.487 20.604 2.671 1.698-.654-3.099-4.046-19.203h2.301c11.763 0 21.334-9.584 21.334-21.366V60.363C179.999 48.58 170.429 39 158.666 39z'

const STAR_PATH =
  'M100 180.001a3.705 3.705 0 0 1-3.687-3.067l-6.477-34.936a3.718 3.718 0 0 0-2.541-2.897 3.713 3.713 0 0 0-3.758.85l-25.775 24.458c-1.332 1.265-3.299 1.393-4.787.313a3.704 3.704 0 0 1-1.18-4.648l15.296-32.071a3.72 3.72 0 0 0-.352-3.838 3.725 3.725 0 0 0-3.541-1.522l-35.227 4.637a3.71 3.71 0 0 1-4.056-2.561 3.705 3.705 0 0 1 1.777-4.453l31.225-16.955c1.234-.669 1.97-1.908 1.97-3.312s-.736-2.641-1.97-3.312L25.692 79.732a3.705 3.705 0 0 1-1.777-4.454 3.709 3.709 0 0 1 4.056-2.559l35.227 4.636a3.713 3.713 0 0 0 3.541-1.521 3.713 3.713 0 0 0 .352-3.838L51.795 39.925a3.707 3.707 0 0 1 1.181-4.649 3.707 3.707 0 0 1 4.786.314l25.775 24.458a3.716 3.716 0 0 0 3.758.85 3.718 3.718 0 0 0 2.541-2.897l6.477-34.936c.335-1.805 1.851-3.067 3.687-3.067s3.352 1.26 3.687 3.067l6.477 34.936a3.721 3.721 0 0 0 2.542 2.897 3.715 3.715 0 0 0 3.758-.85l25.775-24.458a3.705 3.705 0 0 1 4.785-.314 3.703 3.703 0 0 1 1.18 4.649l-15.296 32.07a3.722 3.722 0 0 0 .352 3.838 3.718 3.718 0 0 0 3.542 1.521l35.227-4.636a3.709 3.709 0 0 1 4.056 2.559 3.705 3.705 0 0 1-1.777 4.454l-31.225 16.955c-1.234.671-1.97 1.908-1.97 3.312s.736 2.643 1.97 3.312l31.225 16.955a3.705 3.705 0 0 1 1.777 4.453 3.71 3.71 0 0 1-4.056 2.561l-35.227-4.637a3.725 3.725 0 0 0-3.541 1.522 3.72 3.72 0 0 0-.352 3.838l15.296 32.071a3.704 3.704 0 0 1-1.18 4.648 3.707 3.707 0 0 1-4.787-.313l-25.775-24.458a3.713 3.713 0 0 0-3.758-.85 3.718 3.718 0 0 0-2.541 2.897l-6.477 34.936A3.705 3.705 0 0 1 100 180.001z'

function MarqueeSvg({ path, className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <path fill="currentColor" d={path} />
    </svg>
  )
}

export function MarqueeSeparator({ color = '#FF5E1A' }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <path fill={color} d={HOME_SEPARATOR_PATH} />
    </svg>
  )
}

export function AnimationBlobIcon() {
  return <MarqueeSvg className="sep-blob" path={ANIMATION_BLOB_PATH} />
}

export function ComicsBubbleIcon() {
  return <MarqueeSvg className="sep-bubble" path={COMICS_BUBBLE_PATH} />
}

export function MarqueeStrip({ variant = 'orange', dark = false }) {
  const color = variant === 'green' ? '#02CA81' : '#FF5E1A'
  const text = 'Click to check the latest project'

  return (
    <Marquee className={`small${dark ? ' dark' : ''}`} duration="43s">
      <span className="word">{text}</span>
      <span className="dot">
        <MarqueeSeparator color={color} />
      </span>
    </Marquee>
  )
}

export function StarIcon({ stroke = '#3b4bd8' }) {
  return (
    <span className="star" style={{ color: stroke }}>
      <MarqueeSvg path={STAR_PATH} />
    </span>
  )
}
