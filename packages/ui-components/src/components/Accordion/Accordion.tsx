import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion, {AccordionProps as MuiAccordionProps} from "@mui/material/Accordion";
import {accordionContainerStyles} from "./styles";
import {Box} from "@mui/material";

export interface AccordionElement {
    id: string,
    disabled?: boolean,
    head: string,
    body: React.ReactElement

}

export interface AccordionProps extends Pick<MuiAccordionProps, 'sx' | 'disabled'> {
    accordions: AccordionElement[];
}

const Accordion = ({accordions}: AccordionProps) => {

    const _accordions = accordions.map(({id, head, body, disabled=false}) => {
        return (
            <MuiAccordion disabled={disabled}>
                <AccordionSummary
                    expandIcon={<AddIcon/>}
                    id={id}
                >
                    <Typography>{head}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {body}
                </AccordionDetails>
            </MuiAccordion>
        )
    })
    return (
        <Box sx={accordionContainerStyles()}>
            {_accordions}
        </Box>
    );
};

export default Accordion;
