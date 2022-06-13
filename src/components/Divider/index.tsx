import type { FC } from 'react'

export interface Props {
  mode?: 'vertical' | 'horizontal'
}

const Divider: FC<Props> = ({ mode = 'horizontal' }) => {
  if (mode === 'vertical') return <div className="mx-8 w-px bg-gray-200" />
  return <hr className="my-8" />
}

export default Divider
