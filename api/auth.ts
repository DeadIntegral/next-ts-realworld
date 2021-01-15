import { requests } from './wrapperAPI'

const AuthAPI = {
  login: async (email: string, password: string) =>
    requests.post('/users/login', {
      user: { email, password },
    }),
}

export default AuthAPI
