import {ComponentStory} from '@storybook/react';
import Input from "./Input";
import React from "react";

export default {
    title: 'Components/Input',
    component: Input({}),
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}  />;

export const SimpleInput = Template.bind({});
SimpleInput.args = {
    label: "Phone number"
};
