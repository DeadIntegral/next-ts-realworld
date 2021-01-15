import { useState } from 'react'
import Router from 'next/router'

import AuthAPI from 'api/auth'

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { data, status } = await AuthAPI.login(email, password)
    if (status === 200) {
      console.log(data)
      Router.push('/')
    } else {
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
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
          Sign in
        </button>
      </fieldset>
    </form>
  )
}

export default LoginForm
