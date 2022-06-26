import { useMemo } from 'react'
import type {
  FC,
  ReactNode,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent
} from 'react'
import classnames from 'classnames'
import { randomString } from 'services'

export interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size' | 'prefix'
  > {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  onEnter?: () => void
  prefix?: ReactNode
  suffix?: ReactNode
  align?: 'left' | 'right'
  error?: ReactNode
  fullWidth?: boolean
  info?: ReactNode
  placeholder?: string
  float?: boolean
}

const Input: FC<Props> = ({
  size = 'md',
  className,
  onEnter,
  prefix,
  suffix,
  align = 'left',
  error,
  fullWidth = false,
  info,
  float = true,
  ...props
}) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !!onEnter) onEnter()
  }
  const elementId: string = useMemo(() => randomString(), [])
  const isBaseWord: boolean = useMemo(
    () => !!prefix || !!suffix,
    [prefix, suffix]
  )
  return (
    <div className={classnames('inline-block', { 'w-full': fullWidth })}>
      <div
        className={classnames(
          isBaseWord
            ? 'inline-flex items-center justify-between rounded border'
            : 'inline-block',
          !!error && isBaseWord ? 'border-red-500' : 'border-gray-300',
          {
            'w-full': fullWidth,
            relative: !!props.placeholder,
            'px-1': isBaseWord && size === 'xs',
            'px-2': isBaseWord && size === 'sm',
            'px-3': isBaseWord && size === 'md',
            'px-4': isBaseWord && size === 'lg',
            'cursor-default': props.readOnly,
            'cursor-not-allowed bg-gray-100': props.disabled
          }
        )}
      >
        {prefix}
        <input
          {...props}
          id={props.id || elementId}
          className={classnames(
            'bg-white focus:outline-none',
            isBaseWord
              ? 'mx-1 w-full flex-1 border-0'
              : 'border-gray-500border block border border-gray-500',
            {
              'rounded-sm text-xs': size === 'xs',
              'p-1': !isBaseWord && size === 'xs',
              'rounded py-1 text-sm': size === 'sm',
              'px-2': !isBaseWord && size === 'sm',
              'rounded-md py-2 text-base': size === 'md',
              'px-3': !isBaseWord && size === 'md',
              'rounded-md py-3 text-lg': size === 'lg',
              'px-4': !isBaseWord && size === 'lg',
              'text-right': align === 'right',
              'w-full': fullWidth,
              peer: !!props.placeholder && float,
              'placeholder-transparent':
                (!!props.placeholder || !!prefix) && float
            },
            !!error
              ? 'border-red-500'
              : 'border-gray-300 focus:border-blue-500',
            className
          )}
          onKeyDown={onKeyDown}
          spellCheck={false}
        />
        {!!props.placeholder && float && (
          <label
            htmlFor={props.id || elementId}
            className={classnames(
              'absolute -top-6 left-0 max-w-[calc(100%-24px)] cursor-text select-none truncate text-gray-600 transition-all peer-placeholder-shown:text-gray-400 peer-empty:left-3 peer-focus:left-0 peer-focus:max-w-full peer-focus:cursor-default peer-focus:text-gray-600',
              !!props.value ? 'left-0' : 'left-3',
              {
                'text-xs peer-placeholder-shown:left-1 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-xs peer-focus:-top-5 peer-focus:text-xs':
                  size === 'xs',
                'text-sm peer-placeholder-shown:left-1.5 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-sm peer-focus:-top-6 peer-focus:text-sm':
                  size === 'sm',
                'text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm':
                  size === 'md',
                '-top-7 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-lg peer-focus:-top-7 peer-focus:text-base':
                  size === 'lg',
                'hidden peer-focus:inline-block': !!prefix
              }
            )}
          >
            {props.placeholder}
          </label>
        )}
        {suffix}
      </div>
      {(!!error || !!info) && (
        <div
          className={classnames(
            'mt-1 text-xs',
            !!error ? 'text-red-500' : !!info ? 'text-gray-400' : undefined
          )}
        >
          {error || info}
        </div>
      )}
    </div>
  )
}

Input.defaultProps = {
  type: 'text'
}

export default Input