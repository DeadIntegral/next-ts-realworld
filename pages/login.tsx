import Link from 'next/link'
import LoginForm from 'components/account/LoginForm'

const Login = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link href="/register" as="/register">
                <a>Need an account?</a>
              </Link>
            </p>
						<LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
