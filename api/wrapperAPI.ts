import axios, { AxiosResponse } from 'axios'

import { getLocalStorage } from 'utils/mutator'
import { BASE_URL, IS_BROWSER } from 'utils/constant'

const responseBody = (res: AxiosResponse) => res.data
const setConfig = () => {
  if (IS_BROWSER && window?.localStorage?.user) {
    const data = getLocalStorage('user')
    return {
      headers: { Authorization: `Token ${data.token}` },
    }
  } else {
    return {}
  }
}
export const requests = {
  get: async (url: string) => {
    try {
      const response: AxiosResponse = await axios.get(`${BASE_URL}${url}`, setConfig())
      return response
    } catch (error) {
      return error.response
    }
  },
  del: (url: string) => axios.delete(`${BASE_URL}${url}`, setConfig()).then(responseBody),
  post: async (url: string, body: object) => {
    try {
      const response: AxiosResponse = await axios.post(`${BASE_URL}${url}`, body, setConfig())
      return response
    } catch (error) {
      return error.response
    }
  },
  put: async (url: string, body: object) => {
    try {
      const response: AxiosResponse = await axios.put(`${BASE_URL}${url}`, body, setConfig())
      return response
    } catch (error) {
      return error.response
    }
  },
}
