import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components/Button',
  globals: { theme: 'dark' },
  decorators: [
    moduleMetadata({
      imports: [], // importante
    }),
  ],
  argTypes: {
    label: { control: 'text', description: 'Button label text' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Button color variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: { control: 'boolean', description: 'Disable the button' },
    clicked: { action: 'clicked', description: 'Button click event' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    color: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary button',
    color: 'secondary',
    size: 'medium',
    disabled: false,
  },
};

export const LargeDisabled: Story = {
  args: {
    label: 'Disabled large',
    color: 'danger',
    size: 'large',
    disabled: true,
  },
};
