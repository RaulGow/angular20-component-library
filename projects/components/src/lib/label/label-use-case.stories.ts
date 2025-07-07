import { Meta, StoryObj } from '@storybook/angular';
import { LabelComponent } from './label.component';

const meta: Meta<LabelComponent> = {
  title: 'Components/Label/Use Cases',
  component: LabelComponent,
  args: {
    text: 'Nombre',
    for: 'nombre',
    required: false,
    size: 'medium',
    context: 'standalone',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Tamaño del label. Ajusta el tamaño de la tipografía.',
      table: {
        category: 'Estilo',
        type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
        defaultValue: { summary: 'medium' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Indica si el campo es obligatorio y muestra un asterisco.',
      table: {
        category: 'Validación',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    text: {
      control: 'text',
      description: 'Texto del label. También se puede proyectar contenido con ng-content.',
      table: {
        category: 'Contenido',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    for: {
      control: 'text',
      description: 'ID del input al que está vinculado el label (atributo `for`).',
      table: {
        category: 'Accesibilidad',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    context: {
      control: { type: 'select' },
      options: ['input', 'dropdown', 'standalone'],
      description: 'Define el contexto visual en el que se usa el label, para aplicar estilos específicos.',
      table: {
        category: 'Estilo',
        type: { summary: "'input' | 'dropdown' | 'standalone'" },
        defaultValue: { summary: 'standalone' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<LabelComponent>;

export const Required: Story = {
  args: {
    required: true,
  },
};

export const InputAndDropdown: Story = {
  args: {
    context: 'dropdown',
  },
};
export const InputAndDropdownRequired: Story = {
  args: {
    context: 'dropdown',
    required: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
  },
};

