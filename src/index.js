/* eslint-disable no-console */
const { NODE_ENV, } = (process || {}).env || {}

export function warn (message) {
  if (NODE_ENV !== 'production' && console) {
    console.warn(`｢warn｣: ${message}`)
  }
}
