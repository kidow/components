interface ReactProps {
  children?: ReactNode
}

namespace NToast {
  interface State {
    id: string
    message: string
    type: NToast.Type
    position: NToast.Position
    pauseOnHover: boolean
  }
  interface Props {}
  interface Emit {
    message: string
    type: NToast.Type
    position: NToast.Position
    pauseOnHover?: boolean
  }
  type Type = 'success' | 'info' | 'warn' | 'error'
  type Position =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}
