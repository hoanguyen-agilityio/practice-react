import { useState } from 'react'
import {
  Button,
  Input,
} from '../../components'
import { FormField } from './form-field'
import './login-page.css'
import { apiRequest } from '@/services'
import {
  ACCOUNTS_API,
  MESSAGES
} from '@/constants'
import { LoaderHelper } from '@/helpers'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '@/validates'

const LoginPage = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: '',
    password: ''
  });
  const [isSubmit, submitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const updateField = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  }
  const config = {
    email: ['emptyEmail','formatEmail'],
    password: ['emptyPassword','passwordRule'],
  };
  const [errors, setErrors]= useState({
    email:'',
    password:'',
    generalError: ''
  })

  const handleSignIn = async e => {
    e.preventDefault();

    const validation = validateForm(fields, config);
    if (!validation.isValid) {
      setErrors({
        email: validation.errors.email,
        password: validation.errors.password
      });

      return;
    }

    try {
      const users = await apiRequest(ACCOUNTS_API, 'GET');
      const user = users.find(({ email }) => email === fields.email);

      // Correct login account
      if (user.email === fields.email && user.password === fields.password) {
        setLoading(true)
        console.log(isLoading);

        // setTimeout(() => {navigate('/students-list')}, 3000);

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
        {errors.generalError && <p className='error-message'>{errors.generalError}</p>}
        <FormField title='Email'>
          <Input
            type='email'
            placeholder='Enter your email'
            name='email'
            ariaLabel='Email'
            className='form-input'
            value={fields.email}
            onChange={updateField}
            errorMessage={errors.email}
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
            errorMessage={errors.password}
          />
        </FormField>
        <Link to='/students-list'>
          <Button
            className='btn btn-login'
            ariaLabel='Button sign in'
            name='Sign In'
            onClick={handleSignIn}
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
    </div>
  )
}

export default LoginPage
