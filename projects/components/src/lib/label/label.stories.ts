import { Meta, StoryObj } from '@storybook/angular';
import { LabelComponent } from './label.component';

const meta: Meta<LabelComponent> = {
  title: 'Components/Label',
  component: LabelComponent,
  tags: ['autodocs'],
  args: {
    text: 'Nombre',
    for: 'nombre',
    required: false,
    size: 'medium',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    required: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
    for: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<LabelComponent>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithProjectedContent: Story = {
  render: (args) => ({
    component: LabelComponent,
    props: args,
    template: `
      <lib-label for="projected">
        Correo Electrónico
      </lib-label>
    `,
  }),
};
