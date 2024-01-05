import { ReactNode } from 'react';

interface IFormField {
  title: string,
  children: ReactNode
}

export const FormField = ({
  title,
  children
} :IFormField) => {
  return (
    <div className='form-field'>
      <label className='input-label'>
        {title}
      </label>
      {children}
    </div>
  )
}
