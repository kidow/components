import type { FC } from 'react'

export interface Props extends ReactProps {
  label?: string
}
interface State {}

const FormItem: FC<Props> = ({ label, children }) => {
  return (
    <div>
      {!!label && (
        <label className="cursor-pointer text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}
      <div className="mt-1">{children}</div>
    </div>
  )
}

export default FormItem
