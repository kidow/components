import { useEffect, useMemo } from 'react'
import type { FC, AriaRole, AriaAttributes } from 'react'
import { createPortal } from 'react-dom'

export interface Props extends AriaAttributes {
  role?: AriaRole
  style?: Partial<CSSStyleDeclaration>
}

const Portal: FC<Props> = ({ children, role, style }) => {
  const element = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    if (style) {
      for (let property in style) {
        const value = style[property]
        if (value) element.style[property] = value
      }
      if (style.position === 'absolute')
        document.body.style.position = 'relative'
    }
    if (role) element.setAttribute('role', role)
    document.body.appendChild(element)
    return () => {
      document.body.removeChild(element)
      if (document.body.style.position) document.body.removeAttribute('style')
    }
  }, [])
  return createPortal(children, element)
}

export default Portal
