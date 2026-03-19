import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputDateComponent } from './input-date';

const meta: Meta<InputDateComponent> = {
  component: InputDateComponent,
  title: 'Components/InputDate',
  globals: { theme: 'dark' },
  decorators: [
    moduleMetadata({
      imports: [], // importante
    }),
  ],
  args: {

  },
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<InputDateComponent>;

export const Default: Story = {
  name: '💡 Default',
};

