import { mutate } from 'swr'

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
