import axios, { AxiosResponse } from 'axios'

import { BASE_URL } from 'utils/constant'

const AuthAPI = {
  login: async (email: string, password: string) => {
    try {
      const response: AxiosResponse = await axios.post(`${BASE_URL}/users/login`, {
        user: { email, password },
      })
      return response
    } catch (error) {
      return error.response
    }
  },
}

export default AuthAPI
