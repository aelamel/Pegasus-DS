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
  variant:'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: "secondary"
};

export const Text = Template.bind({});
Text.args = {
  label: 'text Button',
  variant: "text"
};



export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  label: 'Small Primary Button',
  variant: "primary",
  size: "small"
};


export const MediumPrimary = Template.bind({});
MediumPrimary.args = {
  label: 'Medium Primary Button',
  variant: "primary",
  size: "medium"
};


export const LargePrimary = Template.bind({});
LargePrimary.args = {
  label: 'Large Primary Button',
  variant: "primary",
  size: "large"
};


export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  label: 'Small secondary Button',
  variant: "secondary",
  size: "small"
};


export const MediumSecondary = Template.bind({});
MediumSecondary.args = {
  label: 'Medium secondary Button',
  variant: "secondary",
  size: "medium"
};


export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  label: 'Large secondary Button',
  variant: "secondary",
  size: "large"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  size:'large',
  disabled: true
};


export const DisabledMedium = Template.bind({});
DisabledMedium.args = {
  label: 'Disabled Medium Button',
  size: "medium",
  disabled: true
};

export const DisabledSmall = Template.bind({});
DisabledSmall.args = {
  label: 'Disabled Small Button',
  size:"small",
  disabled: true
};

