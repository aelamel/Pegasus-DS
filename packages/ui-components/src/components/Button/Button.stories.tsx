import { ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}  />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  color: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  color: "secondary"
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: "small"
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true
};

