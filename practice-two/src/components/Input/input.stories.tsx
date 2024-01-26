import {
  Meta,
  StoryObj
} from '@storybook/react';


// Components
import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    type: 'text',
    name: 'input',
    ariaLabel: 'Input default',
    customClass: 'w-445px'
  },
};
