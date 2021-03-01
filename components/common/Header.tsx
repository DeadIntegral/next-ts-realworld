import Link from 'next/link'
import { APP_NAME } from 'utils/constant'
import useSWR from 'swr'

import { getLocalStorage } from 'utils/mutator'

const Header = () => {
  const { data: currentUser } = useSWR('user', getLocalStorage)
  return (
    <div className="navbar navbar-light">
      <div className="container">
        <Link href="/" as="/">
          <a className="navbar-brand">{APP_NAME}</a>
        </Link>
        {currentUser ? (
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link href="/" as="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/editor/new" as="/editor/new">
                <a className="nav-link">
                  <i className="ion-compose" />
                  New Post
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/settings" as="/settings">
                <a className="nav-link">
                  <i className="ion-gear-a" />
                  Settings
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/profile/${currentUser?.username}`} as={`/profile/${currentUser?.username}`}>
                <a className="nav-link">stupidk</a>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link href="/" as="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" as="/login">
                <a className="nav-link">Sign in</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register" as="/register">
                <a className="nav-link">Sign up</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header
