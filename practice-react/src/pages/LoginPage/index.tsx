import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-page.css';
import { FormField } from './form-field';
import {
  Button,
  CONFIG,
  Input,
  Loader,
} from '@/components';
import { apiRequest } from '@/services';
import { MESSAGES } from '@/constants';
import { validateForm } from '@/validates';
import { PartialUser } from '@/types';

const LoginPage = () => {
  const navigate = useNavigate();

  // useState
  const [fields, setFields] = useState({
    email: '',
    password: ''
  });
  const [errorsMessage, setErrors]= useState({
    email:'',
    password:'',
    generalError: ''
  });
  const [isSubmit, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // Handles field updates
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  }

  // Handle sign in
  const handleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const validation = validateForm(fields, CONFIG);

    if (!validation.isValid) {
      setErrors({
        email: validation.errors.email!,
        password: validation.errors.password
      });

      return;
    }

    try {
      const users = await apiRequest<null, PartialUser[]>(import.meta.env.VITE_ACCOUNTS_API, 'GET');
      const user: PartialUser = users.find(({ email }) => email === fields.email)!;

      // Correct login account
      if (user.email === fields.email && user.password === fields.password) {
        setErrors({
          email: '',
          password: '',
          generalError: ''
        })
        setLoading(true)
        localStorage.setItem('user', user.email);
        setTimeout(() => {navigate('/students-list')}, 3000);

      // Login with the wrong account
      } else {
        setErrors({
          email: '',
          password: '',
          generalError: MESSAGES.INCORRECT_LOGIN_ACCOUNT
        });

        return;
      }
    } catch (error) {
      setErrors({
        email: '',
        password: '',
        generalError: MESSAGES.GET_ACCOUNT_ERR
      });

      return;
    }

    setSubmit(true);
  };

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
        {errorsMessage.generalError && <p className='error-message'>{errorsMessage.generalError}</p>}
        <FormField title='Email'>
          <Input
            type='email'
            placeholder='Enter your email'
            name='email'
            ariaLabel='Email'
            className='form-input'
            value={fields.email}
            onChange={handleInputChange}
            errorMessage={errorsMessage.email}
          />
        </FormField>
        <FormField title='Password'>
          <Input
            type='password'
            placeholder='Enter your password'
            name='password'
            ariaLabel='Password'
            className='form-input'
            onChange={handleInputChange}
            errorMessage={errorsMessage.password}
          />
        </FormField>
        <Button
          className='btn btn-login'
          ariaLabel='Button sign in'
          name='Sign In'
          onClick ={handleSignIn}
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
      {isLoading && <Loader />}
    </div>
  )
}

export default LoginPage;
