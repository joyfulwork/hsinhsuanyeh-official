import { useEffect, useRef } from 'react'

export function Marquee({ className = '', duration, children }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track || track.dataset.duped === 'true') return
    track.innerHTML = track.innerHTML + track.innerHTML
    track.dataset.duped = 'true'
  }, [children])

  const style = duration ? { '--marquee-duration': `${duration}s` } : undefined

  return (
    <div className={`marquee ${className}`.trim()} style={style}>
      <div className="track" ref={trackRef}>
        <span>{children}</span>
      </div>
    </div>
  )
}

const MARQUEE_SEPARATOR_PATH =
  'M174.791 102.951l2.06-3.315c7.054-11.348 3.573-26.267-7.776-33.322l-3.314-2.06a24.197 24.197 0 0 1-10.79-15.051l-.887-3.801c-3.036-13.013-16.048-21.101-29.062-18.065l-3.8.887a24.192 24.192 0 0 1-18.272-3.014l-3.314-2.06c-11.35-7.054-26.269-3.574-33.323 7.776l-2.06 3.314a24.195 24.195 0 0 1-15.052 10.789l-3.8.887C32.388 48.953 24.3 61.965 27.336 74.979l.887 3.8a24.192 24.192 0 0 1-3.014 18.272l-2.06 3.314c-7.054 11.348-3.574 26.268 7.776 33.322l3.314 2.06a24.197 24.197 0 0 1 10.79 15.051l.887 3.8c3.036 13.013 16.048 21.101 29.062 18.065l3.799-.887a24.192 24.192 0 0 1 18.272 3.014l3.315 2.061c11.35 7.054 26.269 3.573 33.323-7.776l2.06-3.314a24.192 24.192 0 0 1 15.052-10.789l3.8-.887c13.013-3.036 21.102-16.047 18.065-29.062l-.887-3.8a24.2 24.2 0 0 1 3.014-18.272z'

export function MarqueeSeparator({ color = '#FF5E1A' }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <path fill={color} d={MARQUEE_SEPARATOR_PATH} />
    </svg>
  )
}

export function MarqueeStrip({ variant = 'orange', dark = false, duration }) {
  const color = variant === 'green' ? '#02CA81' : '#FF5E1A'
  const text = 'Click to check the latest project'

  return (
    <Marquee className={`small${dark ? ' dark' : ''}`} duration={duration}>
      <span className="word">{text}</span>
      <span className="dot">
        <MarqueeSeparator color={color} />
      </span>
      <span className="word">{text}</span>
      <span className="dot">
        <MarqueeSeparator color={color} />
      </span>
      <span className="word">{text}</span>
      <span className="dot">
        <MarqueeSeparator color={color} />
      </span>
    </Marquee>
  )
}

export function StarIcon({ stroke = '#3b4bd8' }) {
  return (
    <span className="star">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <polygon
          points="50,2 58,30 84,14 70,40 100,44 72,56 90,80 60,66 56,98 44,68 18,86 32,58 2,52 30,42 12,16 42,32"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
        />
      </svg>
    </span>
  )
}
