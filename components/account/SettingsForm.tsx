import { useState, useEffect } from 'react'

import AuthAPI from 'api/auth'

const SettingsForm = () => {
  const [userData, setUserData] = useState({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  })
  useEffect(() => {
    AuthAPI.current()
      .then((res) => {
        const { data } = res
        const user = data.user
        setUserData((origin) => ({
          ...origin,
          image: user.image,
          username: user.username,
          bio: user.bio,
          email: user.email,
        }))
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [])
  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    setUserData((origin) => ({ ...origin, [target.name]: target.value }))
  }
  const handleBioData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e
    setUserData((origin) => ({ ...origin, [target.name]: target.value }))
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    AuthAPI.setting(userData).then((res) => {
      const { user } = res
      setUserData({
        image: user.image,
        username: user.username,
        bio: user.bio,
        email: user.email,
        password: '',
      })
      alert('update complete')
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="URL of profile picture"
          value={userData.image}
          name="image"
          onChange={handleUserData}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Username"
          value={userData.username}
          name="username"
          onChange={handleUserData}
        />
      </fieldset>
      <fieldset className="form-group">
        <textarea
          className="form-control form-control-lg"
          rows={8}
          placeholder="Short bio about you"
          value={userData.bio}
          name="bio"
          onChange={handleBioData}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="Email"
          value={userData.email}
          name="email"
          onChange={handleUserData}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          type="password"
          className="form-control form-control-lg"
          placeholder="New Password"
          value={userData.password}
          name="password"
          onChange={handleUserData}
        />
      </fieldset>
      <fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
          Update Settings
        </button>
      </fieldset>
    </form>
  )
}

export default SettingsForm
