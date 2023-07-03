import { StoryFn, Meta } from '@storybook/react';
import Text, { TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `Text`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<TextProps>;

export const Default: StoryFn<TextProps> = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
