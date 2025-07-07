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
  args: {
    label: 'Click me',
    size: 'small',
    color: 'primary',
    variant: 'solid',
    disabled: false,
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning'], // solo colores "solidos"
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    clicked: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  name: '💡 Default',
};

export const SolidPrimary: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
  },
};

export const SolidSecondary: Story = {
  args: {
    color: 'secondary',
    variant: 'solid',
  },
};

export const SolidSuccess: Story = {
  args: {
    color: 'success',
    variant: 'solid',
  },
};

export const SolidWarning: Story = {
  args: {
    color: 'warning',
    variant: 'solid',
  },
};

export const SolidDanger: Story = {
  args: {
    color: 'danger',
    variant: 'solid',
  },
};

export const OutlinePrimary: Story = {
  args: {
    color: 'primary',
    variant: 'outline',
  },
};

export const OutlineSecondary: Story = {
  args: {
    color: 'secondary',
    variant: 'outline',
  },
};

export const OutlineSuccess: Story = {
  args: {
    color: 'success',
    variant: 'outline',
  },
};

export const OutlineWarning: Story = {
  args: {
    color: 'warning',
    variant: 'outline',
  },
};

export const OutlineDanger: Story = {
  args: {
    color: 'danger',
    variant: 'outline',
  },
};

export const GhostPrimary: Story = {
  args: {
    color: 'primary',
    variant: 'ghost',
  },
};

export const GhostSecondary: Story = {
  args: {
    color: 'secondary',
    variant: 'ghost',
  },
};

export const GhostSuccess: Story = {
  args: {
    color: 'success',
    variant: 'ghost',
  },
};

export const GhostWarning: Story = {
  args: {
    color: 'warning',
    variant: 'ghost',
  },
};

export const GhostDanger: Story = {
  args: {
    color: 'danger',
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
