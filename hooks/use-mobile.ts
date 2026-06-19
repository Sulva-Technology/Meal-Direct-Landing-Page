import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    // Avoid double-setting in effect if it's already set or initialized lazily.
    // We defer the initial measure to after mount since we are client-side rendering.
    if (isMobile === undefined) {
      const isMob = window.innerWidth < MOBILE_BREAKPOINT
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMobile(isMob)
    }
    return () => mql.removeEventListener("change", onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return !!isMobile
}
