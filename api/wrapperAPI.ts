import axios, { AxiosResponse } from 'axios'

import { BASE_URL } from 'utils/constant'

const responseBody = (res: AxiosResponse) => res.data
const setConfig = () => ({})
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
  put: (url: string, body: object) => axios.put(`${BASE_URL}${url}`, body, setConfig()).then(responseBody),
}
