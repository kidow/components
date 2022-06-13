import type { FC, ReactNode } from 'react'
import classnames from 'classnames'

export interface Props {
  checked: boolean
  onChange: (checked: boolean) => void
  label: ReactNode
  indeterminate?: boolean
  disabled?: boolean
}

const Checkbox: FC<Props> = ({
  checked,
  onChange,
  label,
  indeterminate,
  disabled
}) => {
  return (
    <label
      className={classnames(
        'mb-0 inline-flex items-center',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      <input
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
        checked={checked}
        ref={(input) => {
          if (!input || indeterminate === undefined) return
          input.indeterminate = indeterminate
        }}
        disabled={disabled}
        className="h-5 w-5 cursor-pointer align-middle disabled:cursor-not-allowed"
      />
      <span
        className={classnames(
          'ml-1.5 text-sm',
          disabled ? 'text-gray-300' : 'text-gray-600'
        )}
      >
        {label}
      </span>
    </label>
  )
}

export default Checkbox
