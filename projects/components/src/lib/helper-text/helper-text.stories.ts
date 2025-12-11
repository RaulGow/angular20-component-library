import { Meta, StoryObj } from '@storybook/angular';
import { HelperTextComponent } from './helper-text.component';

const meta: Meta<HelperTextComponent> = {
  title: 'Components/HelperText',
  component: HelperTextComponent,
  tags: ['autodocs'],
  args: {
    text: 'Este es un helper text',
    size: 'medium',
    context: 'standalone',
    type: 'info',
    show: true,
    ariaLive: 'off',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto del helper. También se puede proyectar contenido con ng-content.',
      table: {
        category: 'Contenido',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Tamaño del helper text.',
      table: {
        category: 'Estilo',
        type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
        defaultValue: { summary: 'medium' },
      },
    },
    context: {
      control: { type: 'select' },
      options: ['input', 'dropdown', 'standalone'],
      description: 'Contexto visual del helper text para aplicar estilos específicos.',
      table: {
        category: 'Estilo',
        type: { summary: "'input' | 'dropdown' | 'standalone'" },
        defaultValue: { summary: 'standalone' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Tipo de mensaje que afecta color y accesibilidad.',
      table: {
        category: 'Estado',
        type: { summary: "'info' | 'success' | 'warning' | 'error'" },
        defaultValue: { summary: 'info' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Controla la visibilidad del helper text.',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    ariaLive: {
      control: { type: 'select' },
      options: ['off', 'polite', 'assertive'],
      description: 'Nivel de anuncio para lectores de pantalla.',
      table: {
        category: 'Accesibilidad',
        type: { summary: "'off' | 'polite' | 'assertive'" },
        defaultValue: { summary: 'off' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<HelperTextComponent>;

export const Default: Story = {};
