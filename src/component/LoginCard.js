import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


function Login() {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }
    return (
      <div className="login__card">
        <div className="logincard__wraper">
          <h1 className='card__header'>Login With</h1>
          <div className='card__bar '></div>
            <span className='google__icon' onClick={google}><FontAwesomeIcon className='link' icon={faGoogle} /></span>
        </div>
      </div>
    );
  }
  
  export default Login;
  