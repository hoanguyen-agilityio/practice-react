import {
  Button,
  Input
} from '../../components';
import { FormField } from './form-field';
import './login-page.css'

const LoginPage = () => {
  return (
    <form className='form-login' id='formlogin'>
      <h1 className='heading form-login-heading'>CRUD OPERATIONS</h1>
      <p className='title form-login-title'>SIGN IN</p>
      <p className='form-login-content'>
        Enter your credentials to access your account
      </p>
      <p className='error-message' />
      <FormField title='Email'>
        <Input type='email' placeholder='Enter your email' name='email' ariaLabel='Email' />
      </FormField>
      <FormField title='Password'>
        <Input type='password' placeholder='Enter your password' name='password' ariaLabel='Password' />
      </FormField>
      <Button className='btn btn-login' ariaLabel='Button sign in' name='Sign In' />
      <p className='message-reset-password'>
        Forgot your password?
        <a href='javascript:void(0);' aria-label='Reset password'>Reset Password</a>
      </p>
    </form>
  )
}

export default LoginPage
