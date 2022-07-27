import { useCallback, useEffect, useId } from 'react'
import type { FC, ReactNode } from 'react'
import { Toast } from 'components'
import { EventListener, useObjectState } from 'services'

enum Position {
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right'
}

export interface Props {
  position?: keyof typeof Position
  autoClose?: number | false
}
interface State {
  list: NToast.State[]
}

const ToastContainer: FC<Props> = ({
  position = 'top-right',
  autoClose = 3000
}) => {
  const [{ list }, setState] = useObjectState<State>({ list: [] })

  const onMessage = useCallback(
    ({ detail }: any) =>
      setState({
        list: !!detail.id
          ? list.filter((item) => item.id !== detail.id)
          : [
              ...list,
              {
                id: useId(),
                message: detail.message,
                type: detail.type,
                position: detail.position || position,
                pauseOnHover: detail.pauseOnHover || true
              }
            ]
      }),
    [list.length]
  )

  const render = (position: NToast.Position): ReactNode => {
    const positionList = list.filter((item) => item.position === position)
    if (!positionList.length) return null
    return (
      <Toast.Wrapper position={position}>
        {positionList.map((item, key) => (
          <Toast key={key} autoClose={autoClose} {...item} />
        ))}
      </Toast.Wrapper>
    )
  }

  // list.length가 늘어날 때만 실행하도록 바꿔야 함!
  useEffect(() => {
    EventListener.once('toast', onMessage)
  }, [list.length])

  if (!list.length) return null
  return (
    <>
      {Object.entries(Position).map(([name, value]) =>
        render(name as keyof typeof Position)
      )}
    </>
  )
}

export default ToastContainer
