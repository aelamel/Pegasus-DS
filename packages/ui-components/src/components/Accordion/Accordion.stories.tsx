import {ComponentStory} from '@storybook/react';
import {Typography} from "@mui/material";
import Accordion from "./Accordion";
import React from "react";

export default {
    title: 'Components/Accordions',
    component: Accordion({accordions: []}),
};

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}  />;

export const SimpleAccordion = Template.bind({});
SimpleAccordion.args = {
    accordions: [
        {
            id:"panel1",
            head: "Initial Accordion State",
            body: <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        },
        {
            id:"panel2",
            head: "Active Accordion State",
            body: <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        },
        {
            id:"panel3",
            disabled:true,
            head: "Disabled Accordion",
            body: <></>
        }

    ]
};
