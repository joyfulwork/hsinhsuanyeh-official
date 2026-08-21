import { useEffect, useRef } from 'react'
import { projectImage } from '../data/projects.js'

function vimeoId(url) {
  const match = url?.match(/vimeo\.com\/(\d+)/)
  return match?.[1]
}

function WixVideo({ poster, src, title }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    video.pause()
    video.removeAttribute('src')
    video.load()

    video.src = src
    video.muted = true
    video.load()

    const play = () => {
      video.play().catch(() => {})
    }

    play()
    video.addEventListener('loadeddata', play)
    return () => {
      video.removeEventListener('loadeddata', play)
      video.pause()
      video.removeAttribute('src')
      video.load()
    }
  }, [src])

  return (
    <video
      key={src}
      ref={videoRef}
      className="masonry-video"
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="auto"
      poster={projectImage(poster)}
    >
      {title}
    </video>
  )
}

function VimeoEmbed({ id, title }) {
  return (
    <div className="project-embed">
      <iframe
        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

// Flatten nested row/block structure into a single item list
function flattenMedia(media) {
  const items = []
  for (const block of media) {
    if (block.type === 'row') {
      items.push(...block.items)
    } else {
      items.push(block)
    }
  }
  return items
}

function MasonryItem({ item, title }) {
  if (item.type === 'image') {
    return (
      <div className="masonry-item">
        <img src={projectImage(item.file)} alt={`${title} still`} loading="lazy" />
      </div>
    )
  }
  if (item.type === 'video') {
    return (
      <div className="masonry-item masonry-item--video">
        <WixVideo poster={item.poster} src={item.src} title={title} />
      </div>
    )
  }
  if (item.type === 'vimeo') {
    return (
      <div className="masonry-item masonry-item--video">
        <VimeoEmbed id={vimeoId(item.url)} title={title} />
      </div>
    )
  }
  return null
}

export function ProjectMedia({ media, title }) {
  if (!media?.length) return null
  const items = flattenMedia(media)

  return (
    <div className="project-masonry">
      {items.map((item, index) => {
        const key =
          item.type === 'video'
            ? `video-${item.src}`
            : item.type === 'image'
              ? `image-${item.file}`
              : item.type === 'vimeo'
                ? `vimeo-${item.url}`
                : `item-${index}`
        return <MasonryItem key={key} item={item} title={title} />
      })}
    </div>
  )
}

export function ProjectVimeoEmbed({ watch, title }) {
  const id = vimeoId(watch)
  if (!id) return null
  return <VimeoEmbed id={id} title={title} />
}

export { vimeoId }
