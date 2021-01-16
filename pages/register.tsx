import Link from 'next/link'


const Register = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link href="/login" as="/login">
                <a>Have an account?</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
