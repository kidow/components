import type {
  FC,
  DetailedHTMLProps,
  KeyboardEvent,
  TextareaHTMLAttributes,
  ReactNode
} from 'react'
import classnames from 'classnames'

export interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  onEnter?: () => void
  info?: ReactNode
  error?: ReactNode
  placeholder?: string
  float?: boolean
  fullWidth?: boolean
}
interface State {}

const Textarea: FC<Props> = ({
  onEnter,
  info,
  error,
  placeholder,
  fullWidth,
  float,
  ...props
}) => {
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !!onEnter) onEnter()
  }
  return (
    <div>
      <textarea
        {...props}
        onKeyDown={onKeyDown}
        className={classnames('focus:outline-none')}
      />
      <label htmlFor=""></label>
    </div>
  )
}

export default Textarea
