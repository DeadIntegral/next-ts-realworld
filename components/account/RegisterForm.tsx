import { useState, useCallback } from 'react'
import Router from 'next/router'

import AuthAPI from 'api/auth'
import { mutator } from 'utils/mutator'

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value), [])
  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), [])
  const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), [])
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { data, status } = await AuthAPI.register(username, email, password)
    if (status === 200) {
			mutator(data.user, 'user')
      Router.push('/')
    } else {
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
          Sign up
        </button>
      </fieldset>
    </form>
  )
}

export default RegisterForm
