import Button from "../../components/button";
import { FormField } from "./form-field";

const LoginPage = () => {
  return (
    <form className='form-login' id='formlogin'>
      <h1 className='heading form-login-heading'>CRUD OPERATIONS</h1>
      <p className='title form-login-title'>SIGN IN</p>
      <p className='form-login-content'>
        Enter your credentials to access your account
      </p>
      <p className='error-message'></p>
      <FormField name='Email' type='email' placeholder='Enter your email' />
      <FormField name='Password' type='password' placeholder='Enter your password' />
      <Button className='btn btn-login' ariaLabel='Button sign in' name='Sign In' />
      <p className="message-reset-password">
        Forgot your password?
        <a href="javascript:void(0);" aria-label="Reset password"
          >Reset Password</a>
      </p>
    </form>
  )
}

export default LoginPage
