import { useMemo, useCallback } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'
import { useEffect } from 'react'

export interface Props {
  value: number
  onChange: (value: number) => void
  readOnly?: boolean
  disabled?: boolean
  count?: number
  half?: boolean
}
interface State {}

const Rating: FC<Props> = ({
  value,
  onChange,
  readOnly,
  disabled,
  count = 5,
  half
}) => {
  const onMouseLeave = useCallback(() => {
    for (let i = 0; i < value; i++) {
      const second = document.getElementById(`rating-second-${i}`)
      if (second) second.style.color = ACTIVE_COLOR
    }
    for (let i = Math.floor(value); i < count; i++) {
      const second = document.getElementById(`rating-second-${i}`)
      if (second) second.style.color = INACTIVE_COLOR
    }

    if (half) {
      const first = document.getElementById(`rating-first-${value}`)
      const second = document.getElementById(
        `rating-second-${Math.floor(value)}`
      )
      if (first) first.style.color = ACTIVE_COLOR
      if (second) second.style.color = INACTIVE_COLOR

      for (let i = 0; i < value; i++) {
        const first = document.getElementById(`rating-first-${i}`)
        if (first) first.style.color = ACTIVE_COLOR
      }
      for (let i = Math.ceil(value); i < count; i++) {
        const first = document.getElementById(`rating-first-${i}`)
        if (first) first.style.color = INACTIVE_COLOR
      }
    }
  }, [value, half])

  const onMouseEnter = useCallback((index: number) => {
    for (let i = 0; i <= index; i++) {
      const second = document.getElementById(`rating-second-${i}`)
      if (second) second.style.color = ACTIVE_COLOR

      if (half) {
        for (let j = 0; j <= index; j++) {
          const first = document.getElementById(`rating-first-${j}`)
          if (first) first.style.color = ACTIVE_COLOR
        }
      }
    }
    for (let i = index + 1; i < count; i++) {
      const second = document.getElementById(`rating-second-${i}`)
      if (second) second.style.color = INACTIVE_COLOR

      if (half) {
        for (let j = index + 1; j < count; j++) {
          const first = document.getElementById(`rating-first-${j}`)
          if (first) first.style.color = INACTIVE_COLOR
        }
      }
    }
  }, [])

  const onHalfMouseEnter = useCallback((index: number) => {
    for (let i = 0; i < index; i++) {
      const first = document.getElementById(`rating-first-${i}`)
      const second = document.getElementById(`rating-second-${i}`)
      if (first) first.style.color = ACTIVE_COLOR
      if (second) second.style.color = ACTIVE_COLOR
    }

    const first = document.getElementById(`rating-first-${index}`)
    if (first) first.style.color = ACTIVE_COLOR
    const second = document.getElementById(`rating-second-${index}`)
    if (second) second.style.color = INACTIVE_COLOR

    for (let i = index + 1; i < count; i++) {
      const first = document.getElementById(`rating-first-${i}`)
      const second = document.getElementById(`rating-second-${i}`)
      if (first) first.style.color = INACTIVE_COLOR
      if (second) second.style.color = INACTIVE_COLOR
    }
  }, [])

  const ACTIVE_COLOR: string = useMemo(() => '#fbbf24 ', [])
  const INACTIVE_COLOR: string = useMemo(() => '#d1d5db', [])

  useEffect(() => {
    if (!value) return
    for (let i = 0; i < value; i++) {
      const second = document.getElementById(`rating-second-${i}`)
      if (second) second.style.color = ACTIVE_COLOR
    }
    if (half) {
      for (let i = 0; i < Math.ceil(value); i++) {
        const first = document.getElementById(`rating-first-${i}`)
        if (first) first.style.color = ACTIVE_COLOR
      }
    }
  }, [])
  return (
    <ul
      role="radiogroup"
      className={classnames('flex select-none', {
        'cursor-not-allowed opacity-70': disabled
      })}
    >
      {Array.from({ length: count }).map((_, key) => (
        <li
          key={key}
          aria-checked={value > key ? 'true' : 'false'}
          aria-posinset={key + 1}
          aria-setsize={count}
          tabIndex={disabled ? -1 : 0}
          role="radio"
          className={classnames('text-xl text-gray-300', {
            'cursor-pointer duration-150 hover:scale-125':
              !disabled && !readOnly,
            relative: half
          })}
          onMouseLeave={disabled || readOnly ? undefined : onMouseLeave}
        >
          {half && (
            <span
              id={`rating-first-${key}`}
              onMouseEnter={
                disabled || readOnly ? undefined : () => onHalfMouseEnter(key)
              }
              onClick={
                disabled || readOnly ? undefined : () => onChange(key + 0.5)
              }
              className="absolute left-0 top-0 h-full w-1/2 overflow-hidden duration-150"
            >
              ★
            </span>
          )}
          <span
            id={`rating-second-${key}`}
            onMouseEnter={
              disabled || readOnly ? undefined : () => onMouseEnter(key)
            }
            onClick={disabled || readOnly ? undefined : () => onChange(key + 1)}
            className="duration-150"
          >
            ★
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Rating