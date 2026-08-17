import { projectImage } from '../data/projects.js'

function vimeoId(url) {
  const match = url?.match(/vimeo\.com\/(\d+)/)
  return match?.[1]
}

function WixVideo({ poster, src, title }) {
  return (
    <video
      className="project-gallery__video"
      controls
      playsInline
      preload="metadata"
      poster={projectImage(poster)}
      crossOrigin="anonymous"
      referrerPolicy="origin"
    >
      <source src={src} type="video/mp4" />
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

function MediaItem({ item, title }) {
  if (item.type === 'image') {
    return <img src={projectImage(item.file)} alt={`${title} still`} loading="lazy" />
  }
  if (item.type === 'video') {
    return <WixVideo poster={item.poster} src={item.src} title={title} />
  }
  if (item.type === 'vimeo') {
    return <VimeoEmbed id={item.id} title={title} />
  }
  return null
}

export function ProjectMedia({ media, title }) {
  if (!media?.length) return null

  return (
    <div className="project-gallery">
      {media.map((block, index) => {
        if (block.type === 'row') {
          return (
            <div key={index} className={`project-gallery__row project-gallery__row--${block.items.length}`}>
              {block.items.map((item, itemIndex) => (
                <MediaItem key={itemIndex} item={item} title={title} />
              ))}
            </div>
          )
        }
        return (
          <div key={index} className="project-gallery__block">
            <MediaItem item={block} title={title} />
          </div>
        )
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
