/** Wix SVG mask → CSS url() value (properly encoded for mask-image). */
export function maskUrl(maskImage) {
  if (!maskImage) return undefined

  let uri = maskImage.trim().replace(/\s+/g, ' ')

  if (!uri.startsWith('data:image/svg+xml,')) {
    return `url("${uri}")`
  }

  const svg = uri.slice('data:image/svg+xml,'.length)
  const encoded = svg.includes('%3C') ? svg : encodeURIComponent(svg)
  return `url("data:image/svg+xml,${encoded}")`
}
