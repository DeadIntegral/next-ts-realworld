import Link from 'next/link'
import { APP_NAME } from 'utils/constant'

const Header = () => {
  return (
    <div className="navbar navbar-light">
      <div className="container">
        <Link href="/" as="/">
          <a className="navbar-brand">{APP_NAME}</a>
        </Link>
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
      </div>
    </div>
  )
}

export default Header
