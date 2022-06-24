import { Children, cloneElement, useRef, useEffect, useMemo } from 'react'
import type { ReactElement, MouseEvent, ReactNode, FC } from 'react'
import classnames from 'classnames'
import { throttle, useObjectState } from 'services'
import { createPortal } from 'react-dom'

export interface Props {
  content: ReactNode
  position: 'top' | 'right' | 'bottom' | 'left'
  border?: boolean
  theme?: 'dark' | 'light'
  arrow?: boolean
  padding?: boolean
  animation?: boolean
}
interface State {
  isOpen: boolean
  triggerTop: number
  triggerLeft: number
  triggerWidth: number
  triggerHeight: number
  tooltipWidth: number
  tooltipHeight: number
}

const Tooltip: FC<Props> = ({
  content,
  children,
  border = false,
  theme = 'light',
  arrow = true,
  position,
  padding = true,
  animation = true,
  ...props
}) => {
  const [
    {
      isOpen,
      triggerLeft,
      triggerTop,
      triggerHeight,
      triggerWidth,
      tooltipHeight,
      tooltipWidth
    },
    setState,
    onChange,
    resetState
  ] = useObjectState<State>({
    isOpen: false,
    triggerTop: 0,
    triggerLeft: 0,
    triggerHeight: 0,
    triggerWidth: 0,
    tooltipHeight: 0,
    tooltipWidth: 0
  })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const child = Children.only(
    typeof children === 'string' ? (
      <div tabIndex={-1}>{children}</div>
    ) : (
      children
    )
  ) as ReactElement
  const trigger = cloneElement(child, {
    ...props,
    className: 'inline-block',
    onMouseOver: throttle((e: MouseEvent) => {
      const element = e.target as HTMLElement
      const { height, width, top, left } = element.getBoundingClientRect()
      setState({
        isOpen: true,
        triggerLeft: left,
        triggerTop: top,
        triggerHeight: height,
        triggerWidth: width
      })
    }, 100),
    onMouseOut: throttle(() => resetState(), 100)
  })

  const left: number = useMemo(() => {
    if (position === 'top' || position === 'bottom')
      return triggerLeft + triggerWidth / 2 - tooltipWidth / 2
    else if (position === 'left') return triggerLeft - tooltipWidth - 10
    else if (position === 'right') return triggerLeft + triggerWidth + 10
    return 0
  }, [triggerLeft, triggerWidth, tooltipWidth])

  const top: number = useMemo(() => {
    if (position === 'top') return triggerTop - tooltipHeight - 10
    else if (position === 'bottom') return triggerTop + tooltipHeight
    else if (position === 'left' || position === 'right')
      return triggerTop + triggerHeight / 2 - tooltipHeight / 2
    return 0
  }, [triggerTop, tooltipHeight])

  const isPositioned: boolean = useMemo(() => {
    return !!tooltipWidth && !!tooltipHeight
  }, [left, top])
  useEffect(() => {
    if (isOpen && tooltipRef.current) {
      const { height, width } = tooltipRef.current.getBoundingClientRect()
      setState({
        tooltipHeight: height,
        tooltipWidth: width
      })
    }
  }, [isOpen, tooltipRef])
  return (
    <>
      {trigger}
      {isOpen &&
        createPortal(
          <div
            role="tooltip"
            ref={tooltipRef}
            className={classnames(
              'fixed z-[9999] rounded',
              isPositioned ? 'visible' : 'invisible',
              {
                'px-5 py-2': padding,
                'after:absolute after:z-10 after:border-8 after:content-[""]':
                  arrow,
                'border border-gray-400': border,
                'before-content-[""] before:absolute before:border-[9px]':
                  arrow && border,

                'bg-white text-gray-700': theme === 'light',
                'bg-black text-white': theme === 'dark',

                'after:border-t-white':
                  arrow && theme === 'light' && position === 'top',
                'after:border-b-white':
                  arrow && theme === 'light' && position === 'bottom',
                'after:border-l-white':
                  arrow && theme === 'light' && position === 'left',
                'after:border-r-white':
                  arrow && theme === 'light' && position === 'right',
                'after:border-t-black':
                  arrow && theme === 'dark' && position === 'top',
                'after:border-b-black':
                  arrow && theme === 'dark' && position === 'bottom',
                'after:border-l-black':
                  arrow && theme === 'dark' && position === 'left',
                'after:border-r-black':
                  arrow && theme === 'dark' && position === 'right',

                'after:bottom-full after:border-t-transparent':
                  arrow && position === 'bottom',
                'after:top-full after:border-b-transparent':
                  arrow && position === 'top',
                'after:left-1/2 after:-ml-2 after:border-x-transparent':
                  arrow && (position === 'top' || position === 'bottom'),

                'after:left-full after:border-r-transparent':
                  arrow && position === 'left',
                'after:right-full after:border-l-transparent':
                  arrow && position === 'right',
                'after:top-1/2 after:-mt-2 after:border-y-transparent':
                  arrow && (position === 'left' || position === 'right'),

                'before:bottom-full before:border-t-transparent':
                  arrow && border && position === 'bottom',
                'before:top-full before:border-b-transparent':
                  arrow && border && position === 'top',
                'before:left-full before:border-r-transparent':
                  arrow && border && position === 'left',
                'before:right-full before:border-l-transparent':
                  arrow && border && position === 'right',

                'before:left-[calc(50%-1px)] before:-ml-2 before:border-x-transparent':
                  arrow &&
                  border &&
                  (position === 'top' || position === 'bottom'),
                'before:top-[calc(50%-1px)] before:-mt-2 before:border-y-transparent':
                  arrow &&
                  border &&
                  (position === 'left' || position === 'right'),

                'before:border-b-gray-400':
                  arrow && border && theme === 'light' && position === 'bottom',
                'before:border-b-black':
                  arrow && border && theme === 'dark' && position === 'bottom',
                'before:border-t-gray-400':
                  arrow && border && theme === 'light' && position === 'top',
                'before:border-t-black':
                  arrow && border && theme === 'dark' && position === 'top',
                'before:border-l-gray-400':
                  arrow && border && theme === 'light' && position === 'left',
                'before:border-l-black':
                  arrow && border && theme === 'dark' && position === 'left',
                'before:border-r-gray-400':
                  arrow && border && theme === 'light' && position === 'right',
                'before:border-r-black':
                  arrow && border && theme === 'dark' && position === 'right'
              }
            )}
            style={{ left, top }}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  )
}

export default Tooltip
