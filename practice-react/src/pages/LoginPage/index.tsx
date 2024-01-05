import { useState } from 'react'
import {
  Button,
  Input,
  Loader,
} from '../../components'
import { FormField } from './form-field'
import './login-page.css'
import { apiRequest } from '@/services'
import {
  ACCOUNTS_API,
  MESSAGES
} from '@/constants'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '@/validates'
import { Student } from '@/types'

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
  })
  const [isSubmit, submitted] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // Handles field updates
  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  }

  const config = {
    email: ['emptyEmail','formatEmail'],
    password: ['emptyPassword','passwordRule'],
  };

  // Handle sign in
  const handleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const validation = validateForm(fields, config);

    if (!validation.isValid) {
      setErrors({
        email: validation.errors.email,
        password: validation.errors.password,
      });

      return;
    }


    try {
      const users = await apiRequest<null, Student[]>(ACCOUNTS_API, 'GET');
      const user = users.find(({ email }) => email === fields.email);

      // Correct login account
      if (user.email === fields.email && user.password === fields.password) {
        setErrors({
          email: '',
          password: '',
          generalError: ''
        })
        setLoading(true)
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

    submitted(true);
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
            onChange={updateField}
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
            onChange={updateField}
            errorMessage={errorsMessage.password}
          />
        </FormField>
        <Link to='/students-list'>
          <Button
            className='btn btn-login'
            ariaLabel='Button sign in'
            name='Sign In'
            onClick ={handleSignIn}
          />
        </Link>

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

export default LoginPage
