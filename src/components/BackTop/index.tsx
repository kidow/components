import { useEffect } from 'react'
import type { FC } from 'react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { throttle, useObjectState } from 'services'
import classnames from 'classnames'

interface State {
  isVisible: boolean
}

const BackTop: FC = () => {
  const [{ isVisible }, setState] = useObjectState<State>({
    isVisible: false
  })

  const onScroll = throttle(
    (e: Event) => setState({ isVisible: window.scrollY > 400 }),
    10
  )

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <button
      className={classnames(
        'fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 duration-150 hover:bg-black',
        isVisible ? 'scale-100' : 'scale-0'
      )}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      tabIndex={-1}
    >
      <ChevronUpIcon className="h-7 w-7 text-white" />
    </button>
  )
}

export default BackTop
