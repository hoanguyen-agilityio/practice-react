import { useState } from 'react'
import {
  Button,
  Input,
  Loader
} from '../../components'
import { FormField } from './form-field'
import './login-page.css'
import { validate } from '@/validates/form'


const LoginPage = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [form, setForm] = useState({
    email:'',
    password:''
  });
  const [submit, submitted] = useState(false);
  const updateField = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  // const printValues = e => {
  //   e.preventDefault();
  //   setForm({
  //       email: data.email,
  //       password: data.password
  //   });

  //   submitted(true);
  // };

  const config = {
    email: ['emptyEmail','formatEmail'],
    password: ['emptyPassword','passwordRule'],
  };
  const validation = validate.validateForm(form, config);

  const [errorsM, setErrors]= useState({
    email:'',
    password:''
  })

  const printValues = e => {
    e.preventDefault();
    setForm({
        email: data.email,
        password: data.password
    });
    if (!validation.isValid) {
      setErrors({
        email: validation.errors.email,
        password: validation.errors.password
      });
      submitted(false);
      return;
    }

    submitted(true);
  };
  console.log(errorsM);

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
            value={data.email}
            onChange={updateField}
            errorMessage={errorsM.email}
          />
        </FormField>
        <FormField title='Password'>
          <Input
            type='password'
            placeholder='Enter your password'
            name='password'
            ariaLabel='Password'
            className='form-input'
            onChange={updateField}
            errorMessage={errorsM.password}
          />
        </FormField>
        <Button
          className='btn btn-login'
          ariaLabel='Button sign in'
          name='Sign In'
          onClick={printValues}
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
