import { useMemo } from 'react'
import type { FC, OptionHTMLAttributes, ComponentProps } from 'react'
import { Input } from 'components'
import { randomString } from 'services'

interface Props extends ComponentProps<typeof Input> {
  options: Array<OptionHTMLAttributes<HTMLOptionElement>['value']>
  id?: string
}

const Autocomplete: FC<Props> = ({ options, ...props }) => {
  const id = useMemo(() => randomString(), [])
  return (
    <>
      <Input {...props} list={props.id || id} />
      <datalist id={props.id || id}>
        {options.map((value, key) => (
          <option value={value} key={key} />
        ))}
      </datalist>
    </>
  )
}

export default Autocomplete
