export const randomString = () => Math.random().toString(36).slice(2)

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