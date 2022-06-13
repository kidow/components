import { useRef } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { ClockIcon } from '@heroicons/react/outline'
import { twoDigitsNumber, useObjectState, useOnClickOutside } from 'services'
import 'dayjs/locale/ko'

interface Props {
  value: Dayjs
  onChange: (day: Dayjs) => void
}
interface State {
  isOpen: boolean
}

const TimePicker: FC<Props> = ({ value, onChange }) => {
  const [{ isOpen }, setState] = useObjectState<State>({
    isOpen: false
  })
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setState({ isOpen: false }))
  return (
    <div
      className={classnames(
        'relative inline-flex items-center justify-between rounded-md border border-gray-300 py-2 px-3'
      )}
      onClick={() => setState({ isOpen: true })}
      ref={ref}
    >
      <input
        className={classnames('cursor-pointer border-0 focus:outline-none')}
        readOnly
        value={dayjs(value).format('HH:mm:ss')}
      />
      <ClockIcon className="h-4 w-4 text-gray-400" />
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-xl">
          <div className="flex h-56 py-1">
            <ul className="flex-1 overflow-y-scroll overscroll-contain">
              {Array.from({ length: 24 }).map((_, key) => (
                <li
                  key={key}
                  className="cursor-pointer px-2 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() => onChange(dayjs(value).set('hour', key))}
                >
                  {twoDigitsNumber(key)}
                </li>
              ))}
            </ul>
            <ul className="flex-1 overflow-y-scroll">
              {Array.from({ length: 60 }).map((_, key) => (
                <li
                  key={key}
                  className="cursor-pointer px-2 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() => onChange(dayjs(value).set('minute', key))}
                >
                  {twoDigitsNumber(key)}
                </li>
              ))}
            </ul>
            <ul className="flex-1 overflow-y-scroll">
              {Array.from({ length: 60 }).map((_, key) => (
                <li
                  key={key}
                  className="cursor-pointer px-2 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() => onChange(dayjs(value).set('second', key))}
                >
                  {twoDigitsNumber(key)}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t p-2 text-sm text-blue-500">
            <span
              className="cursor-pointer"
              onClick={() => {
                onChange(dayjs())
                setState({ isOpen: false })
              }}
            >
              현재
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default TimePicker
