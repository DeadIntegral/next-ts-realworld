import axios from 'axios'

export const fetcher = async function (url: string) {
  const { data } = await axios.get(url, {})
  return data
}