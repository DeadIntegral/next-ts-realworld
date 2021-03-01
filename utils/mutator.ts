import { mutate } from 'swr'
import { IS_BROWSER } from 'utils/constant'

export const mutator = (data: object, key: string) => {
  mutate(key, data)
  setLocalStorage({ key, value: JSON.stringify(data) })
}
interface localStorageTypes {
  key: string
  value: string
}
function setLocalStorage({ key, value }: localStorageTypes) {
  localStorage.setItem(key, value)
}
export function getLocalStorage(key: string) {
  if(IS_BROWSER){
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : undefined
  } else {
    return {}
  }
}
