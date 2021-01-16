import { requests } from './wrapperAPI'

const AuthAPI = {
  login: async (email: string, password: string) =>
    requests.post('/users/login', {
      user: { email, password },
    }),
  register: async (username: string, email: string, password: string) =>
    requests.post('/users', {
      user: { username, email, password },
    }),
}

export default AuthAPI
