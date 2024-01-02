import {
  Button,
  Input,
  Loader
} from '../../components'
import { FormField } from './form-field'
import './login-page.css'

const LoginPage = () => {
  return (
    <div className='section-body-login'>
      <form
        className='form-login'
        id='formlogin'
        >
        <h1 className='heading form-login-heading'>
          CRUD OPERATIONS
        </h1>
        <p className='title form-login-title'>
          SIGN IN
        </p>
        <p className='form-login-content'>
          Enter your credentials to access your account
        </p>
        <p className='error-message' />
        <FormField title='Email'>
          <Input
            type='email'
            placeholder='Enter your email'
            name='email'
            ariaLabel='Email'
            className='form-input'
          />
        </FormField>
        <FormField title='Password'>
          <Input
            type='password'
            placeholder='Enter your password'
            name='password'
            ariaLabel='Password'
            className='form-input'
          />
        </FormField>
        <Button
          className='btn btn-login'
          ariaLabel='Button sign in'
          name='Sign In'
        />
        <p className='message-reset-password'>
          Forgot your password?
          <a
            href='javascript:void(0);'
            aria-label='Reset password'
          >
            Reset Password
          </a>
        </p>
      </form>
      <Loader />
    </div>
  )
}

export default LoginPage
