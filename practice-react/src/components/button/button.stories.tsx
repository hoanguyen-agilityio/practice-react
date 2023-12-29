import {
  Meta,
  StoryObj
} from '@storybook/react'

// Components
import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    className: 'btn',
    ariaLabel: 'button',
    name: 'button'
  },
}

export const BtnLogin: Story = {
  args: {
    className: 'btn-login',
    ariaLabel: 'Button sign in',
    name: 'Sign In'
  }
}
