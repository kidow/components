import { Event, EventListener } from 'services'

export function throttle(func: Function, wait: number) {
  let waiting = false
  return function () {
    if (!waiting) {
      // @ts-ignore
      func.apply(this, arguments)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, wait)
    }
  }
}

export const priceFormat = (value?: string | number): string => {
  if (!value) return '0'
  else if (typeof value === 'string') return Number(value).toLocaleString()
  else if (typeof value === 'number') return value.toLocaleString()
  else return '0'
}

export const twoDigitsNumber = (digit: number): string =>
  digit < 10 ? `0${digit}` : String(digit)

export const toast = {
  success: (message: string, options?: Omit<NToast.Emit, 'message' | 'type'>) =>
    EventListener.emit<NToast.Emit>(Event.Toast, {
      message,
      type: 'success',
      position: options?.position || 'top-right'
    }),
  info: (message: string, options?: Omit<NToast.Emit, 'message' | 'type'>) =>
    EventListener.emit<NToast.Emit>(Event.Toast, {
      message,
      type: 'info',
      position: options?.position || 'top-right'
    }),
  warn: (message: string, options?: Omit<NToast.Emit, 'message' | 'type'>) =>
    EventListener.emit<NToast.Emit>(Event.Toast, {
      message,
      type: 'warn',
      position: options?.position || 'top-right'
    }),
  error: (message: string, options?: Omit<NToast.Emit, 'message' | 'type'>) =>
    EventListener.emit<NToast.Emit>(Event.Toast, {
      message,
      type: 'error',
      position: options?.position || 'top-right'
    })
}

export const hexToRgb = (hex: string) => {
  hex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_, r, g, b) => r + r + g + g + b + b
  )

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
      }
    : null
}

export const rgbToHex = (red: number, green: number, blue: number) => {
  return (
    '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
  )
}
