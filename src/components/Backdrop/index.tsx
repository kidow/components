import { useEffect } from 'react'
import type { FC } from 'react'
import { Spinner } from 'components'

interface Props {
  loading: boolean
}

const Backdrop: FC<Props> = ({ loading }) => {
  useEffect(() => {
    if (loading) document.body.style.overflow = 'hidden'
    else document.body.removeAttribute('style')
  }, [loading])
  if (!loading) return null
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-30" />
      <span className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner className="h-10 w-10" />
      </span>
    </>
  )
}

Backdrop.defaultProps = {
  loading: false
}

export default Backdrop
