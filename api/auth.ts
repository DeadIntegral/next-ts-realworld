import { requests } from './wrapperAPI'
import { UserWriteType } from 'types/UserTypes'

const AuthAPI = {
  login: async (email: string, password: string) =>
    requests.post('/users/login', {
      user: { email, password },
    }),
  register: async (username: string, email: string, password: string) =>
    requests.post('/users', {
      user: { username, email, password },
    }),
  current: () => requests.get('/user'),
  setting: (user: UserWriteType) => requests.put('/user', user),
}

export default AuthAPI
