import { flushSync } from 'react-dom'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

function startOutIn(update) {
  if (typeof document.startViewTransition !== 'function') {
    update()
    return
  }

  const run = () => flushSync(update)
  try {
    document.startViewTransition({ types: ['OutIn'], update: run })
  } catch {
    document.startViewTransition(run)
  }
}

export function Link({ to, replace, state, preventScrollReset, relative, onClick, target, ...props }) {
  const navigate = useNavigate()

  return (
    <RouterLink
      to={to}
      replace={replace}
      state={state}
      preventScrollReset={preventScrollReset}
      relative={relative}
      target={target}
      onClick={(event) => {
        onClick?.(event)
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.altKey ||
          event.ctrlKey ||
          event.shiftKey ||
          (target && target !== '_self')
        ) {
          return
        }
        event.preventDefault()
        startOutIn(() =>
          navigate(to, { replace, state, preventScrollReset, relative }),
        )
      }}
      {...props}
    />
  )
}
