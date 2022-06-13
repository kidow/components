import type { FC, ReactNode } from 'react'
import classnames from 'classnames'

export interface Props {
  options: Array<{
    name: ReactNode
    value: any
    disabled?: boolean
  }>
  onChange: (value: any) => void
  value?: any
  direction?: 'horizontal' | 'vertical'
  initial?: boolean
  disabled?: boolean
}

const Radio: FC<Props> = ({
  options,
  onChange,
  value,
  direction = 'horizontal',
  initial = false,
  disabled = false
}) => {
  return (
    <div
      className={classnames('flex flex-wrap gap-3', {
        'flex-col': direction === 'vertical'
      })}
    >
      {initial && (
        <label className="flex cursor-pointer items-center">
          <input
            type="radio"
            disabled={disabled}
            onChange={() => onChange('')}
            checked={value === ''}
          />
          <span className="ml-1 text-sm">전체</span>
        </label>
      )}
      {options.map((item, index) => (
        <label
          key={index}
          className={classnames(
            'flex items-center',
            disabled || item.disabled
              ? 'cursor-not-allowed opacity-50'
              : 'cursor-pointer'
          )}
        >
          <input
            type="radio"
            checked={value === item.value}
            onChange={() => onChange(item.value)}
            disabled={disabled || item.disabled}
          />
          <div className="ml-1 inline-block text-sm text-gray-600">
            {item.name}
          </div>
        </label>
      ))}
    </div>
  )
}

export default Radio
