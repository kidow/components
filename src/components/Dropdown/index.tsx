import { useRef, useMemo } from 'react'
import type { FC } from 'react'
import { Portal } from 'components'
import { useObjectState, useOnClickOutside, randomString } from 'services'

interface Props {
  list: string[]
  onClick: (index: number) => void
  label?: string
}
interface State {
  isOpen: boolean
}

const Dropdown: FC<Props> = ({ label = 'Dropdown', list, onClick }) => {
  const [{ isOpen }, setState] = useObjectState<State>({
    isOpen: false
  })
  const ref = useRef<HTMLButtonElement>(null)
  const targetRef = useRef<HTMLUListElement>(null)
  const elementId = useMemo(() => randomString(), [])

  useOnClickOutside(targetRef, () => setState({ isOpen: false }), elementId)
  return (
    <>
      <button
        onClick={() => setState({ isOpen: !isOpen })}
        id={elementId}
        ref={ref}
        className="inline-flex items-center rounded-md px-4 py-2 text-sm text-gray-700 after:ml-2 after:block after:h-1.5 after:w-1.5 after:rotate-45 after:border-b after:border-r after:border-gray-700 after:bg-transparent after:content-[''] hover:bg-gray-50"
      >
        {label}
      </button>
      {isOpen && (
        <Portal
          style={{
            left: `${ref.current?.getBoundingClientRect().left || 0}px`,
            top: `${
              window.scrollY +
              (ref.current?.getBoundingClientRect().top || 0) +
              40
            }px`,
            position: 'absolute',
            zIndex: '9999',
            minWidth: `${ref.current?.getBoundingClientRect().width || 0}px`
          }}
        >
          <ul
            className="z-10 rounded-md bg-gray-50 p-1 text-gray-700 shadow-xl"
            role="menu"
            tabIndex={0}
            ref={targetRef}
          >
            {list.map((item, key) => (
              <li
                className="cursor-pointer rounded-md p-2 hover:bg-gray-100"
                role="menuitem"
                tabIndex={-1}
                key={key}
                onClick={() => {
                  onClick(key)
                  setState({ isOpen: false })
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </Portal>
      )}
    </>
  )
}

export default Dropdown
