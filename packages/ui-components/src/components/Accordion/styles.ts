import {ComponentsVariants, SxProps} from "@mui/material";

export const accordionContainerStyles = (): SxProps => ({
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "#5F2EEA",
    padding: "5px"
});

export const AccordionDefaultProps = (): SxProps => ({
    marginY: "10px",
    boxShadow: "none",
    position: "initial",
    backgroundColor: "#EFF0F7",
    borderRadius: "10px!important",
    "&:active": {
        border: "1px solid black"
    },
    "div! > & ": {borderStyle: "dotted", borderWidth: "2px", borderColor: "#5F2EEA"}
});

export const AccordionVariants = (): ComponentsVariants['MuiAccordion'] => [{
    props: {disabled: true},
    style: {
        backgroundColor: "#EFF0F7",
    }
}];

export const AccordionSummaryDefaultProps = (): SxProps => ({
    "& p": {
        fontWeight: "600"
    }
});

export const AccordionDetailsDefaultProps = (): SxProps => ({
    color: "#4E4B66"
});
