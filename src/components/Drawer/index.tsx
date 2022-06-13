import type { FC } from 'react'
import classnames from 'classnames'
import { Portal } from 'components'
import { XIcon } from '@heroicons/react/outline'

interface Props {
  isOpen: boolean
  position: 'top' | 'right' | 'bottom' | 'left'
  onClose: () => void
}

const Drawer: FC<Props> = ({ position, isOpen, onClose, children }) => {
  return (
    <Portal role="dialog">
      <div
        tabIndex={-1}
        className={classnames(
          'fixed inset-0 z-30 duration-300 ease-in-out',
          isOpen ? 'visible' : 'invisible'
        )}
        aria-labelledby="drawer-title"
        aria-modal="true"
      >
        <div className="flex min-h-screen items-end justify-center p-0">
          <div
            className={classnames(
              'fixed inset-0 bg-black transition-opacity',
              isOpen ? 'opacity-50' : 'opacity-0'
            )}
            aria-hidden="true"
            onClick={onClose}
          />
          <span
            className="hidden h-screen align-middle md:inline-block"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className={classnames(
              'fixed z-40 overflow-auto bg-white shadow-xl transition-transform',
              position === 'bottom' ? 'bottom-0' : 'top-0',
              {
                'left-0': position === 'left',
                'right-0': position === 'right',
                'h-full w-full sm:w-1/3':
                  position === 'left' || position === 'right',
                'h-full w-full sm:h-1/3':
                  position === 'top' || position === 'bottom',
                '-translate-x-full sm:-translate-x-[calc(100vw/3)]':
                  position === 'left' && !isOpen,
                'translate-x-full sm:translate-x-[calc(100vw/3)]':
                  position === 'right' && !isOpen,
                '-translate-y-full sm:-translate-y-[calc(100vh/3)]':
                  position === 'top' && !isOpen,
                'translate-y-full sm:translate-y-[calc(100vh/3)]':
                  position === 'bottom' && !isOpen
              }
            )}
          >
            {isOpen && children}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-block sm:hidden"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Drawer
