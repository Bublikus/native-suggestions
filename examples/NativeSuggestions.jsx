import { useEffect, useRef } from 'react'
import NativeSuggestions from '@bublikus/native-suggestions'

export default ({ children, ...props }) => {
  const wrapperRef = useRef()

  useEffect(() => {
    const inputs = wrapperRef.current.querySelectorAll('input')
    inputs.forEach(input => new NativeSuggestions(input, props))
  }, [])

  return <div ref={wrapperRef}>{children}</div>
}
