import { Meta, StoryObj } from '@storybook/react'

// Components
import Input from '.'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: 'text',
  },
}

export const InputEmail: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email'
  }
}

export const InputPassword: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password'
  }
}
