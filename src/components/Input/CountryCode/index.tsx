import { useId, useRef } from 'react'
import type { ComponentProps, FC } from 'react'
import { Input } from 'components'
import useSWR from 'swr/immutable'
import { useObjectState, useOnClickOutside } from 'services'
import { createPortal } from 'react-dom'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classnames from 'classnames'

export interface Props extends ComponentProps<typeof Input> {
  onCodeChange: (code: string) => void
}
interface State {
  isOpen: boolean
  flag: string
}

const InputCountryCode: FC<Props> = ({ onCodeChange, ...props }) => {
  const [{ isOpen, flag }, setState] = useObjectState<State>({
    isOpen: false,
    flag: ''
  })
  const { data } = useSWR<
    Array<{
      flag: string
      idd: {
        root: string
        suffixes: string[]
      }
      name: { common: string; official: string }
    }>
  >('country_codes', () =>
    fetch(
      'https://restcountries.com/v3.1/all?fields=name&fields=idd&fields=flag'
    ).then((res) => res.json())
  )
  const ref = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLUListElement>(null)
  const id = useId()

  useOnClickOutside(targetRef, () => setState({ isOpen: false }), id)
  return (
    <>
      <div ref={ref} className="inline-block">
        <Input
          {...props}
          prefix={
            <div className="flex items-center gap-0.5">
              <button
                id={id}
                className={classnames({
                  'h-4 w-4 rounded bg-gray-100': !flag
                })}
                onClick={() => setState({ isOpen: !isOpen })}
              >
                {flag}
              </button>
              <ChevronDownIcon
                className={classnames('h-4 w-4 text-gray-700 duration-150', {
                  'rotate-180': isOpen
                })}
              />
            </div>
          }
        />
      </div>
      {isOpen &&
        createPortal(
          <ul
            ref={targetRef}
            className="fixed z-[9999] h-52 overflow-auto overscroll-contain border bg-white text-sm text-slate-600 shadow-xl"
            style={{
              left: ref.current!.getBoundingClientRect().left,
              top:
                window.scrollY +
                ref.current!.getBoundingClientRect().top +
                ref.current!.clientHeight
            }}
          >
            {data
              ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map((item, key) => (
                <li
                  key={key}
                  className="flex cursor-pointer gap-1.5 py-1.5 px-2.5 hover:bg-gray-100"
                  onClick={() => {
                    setState({ flag: item.flag })
                  }}
                >
                  <span>{item.flag}</span>
                  <span className="text-slate-700">{item.name.common}</span>
                  <span className="text-gray-400">
                    {item.idd.root +
                      (item.idd.suffixes.length === 1
                        ? item.idd.suffixes[0]
                        : '')}
                  </span>
                </li>
              ))}
          </ul>,
          document.body
        )}
    </>
  )
}

export default InputCountryCode
