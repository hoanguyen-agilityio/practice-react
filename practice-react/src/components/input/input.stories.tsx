import { Meta, StoryObj } from '@storybook/react'

// Components
import Input from './index'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: 'text',
    name: 'input',
    ariaLabel: 'Input default'
  },
}

export const InputEmail: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
    ariaLabel: 'Email'
  }
}

export const InputPassword: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
    name: 'password',
    ariaLabel: 'Password'
  }
}
