import {ComponentStory} from '@storybook/react';
import Typography from "./Typography";
import React from "react";

export default {
    title: 'Components/Typography',
    component: Typography({}),
};

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args}  />;

export const h1 = Template.bind({});
h1.args = {variant: "h1", children: "This is a simple h1 phrase"};


export const h2 = Template.bind({});
h2.args = {variant: "h2", children: "This is a simple h2 phrase"};

export const h3 = Template.bind({});
h3.args = {variant: "h3", children: "This is a simple h3 phrase"};

export const h4 = Template.bind({});
h4.args = {variant: "h4", children: "This is a simple h4 phrase"};

export const h5 = Template.bind({});
h5.args = {variant: "h5", children: "This is a simple h5 phrase"};

export const h6 = Template.bind({});
h6.args = {variant: "h6", children: "This is a simple h6 phrase"};


export const caption = Template.bind({});
caption.args = {variant: "caption", children: "This is a simple caption phrase"};


export const subtitle1 = Template.bind({});
subtitle1.args = {variant: "subtitle1", children: "This is a simple subtitle 1 phrase"};


export const subtitle2 = Template.bind({});
subtitle2.args = {variant: "subtitle2", children: "This is a simple subtitle 2 phrase"};


const text = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";


export const body1 = Template.bind({});
body1.args = {variant: "body1", children: text};


export const body2 = Template.bind({});
body2.args = {variant: "body2", children: text};
