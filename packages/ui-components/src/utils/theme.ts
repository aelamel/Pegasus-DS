import { createTheme } from '@mui/material/styles';
import {ButtonCommonStyles, ButtonVariants} from "../components/Button/styles";
import {
    AccordionDefaultProps,
    AccordionDetailsDefaultProps,
    AccordionSummaryDefaultProps, AccordionVariants
} from "../components/Accordion/styles";
import {InputSxDefaultProps} from "../components/Input/styles";
import {common} from "@mui/material/colors";
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true
    }
}
export const theme = createTheme({
    typography:palette => ({
        allVariants:{
            color: common.black,
        },
        h1:{
            fontSize: "2.6rem",
            fontWeight:"900",
            "&:hover":{
                color:palette.primary.dark
            },
        },
        h2:{
            fontSize: "2.4rem",
            fontWeight:"900",
            "&:hover":{
                color:palette.primary.dark
            },
        },
        h3:{
            fontSize: "2.2rem",
            fontWeight:"900",
            "&:hover":{
                color:palette.primary.dark
            },
        },
        h4:{
            fontSize: "1.8rem",
            fontWeight:"900",
            "&:hover":{
                color:palette.primary.dark
            },
        },
        h5:{
            fontSize: "1.5rem",
            fontWeight:"900",
            "&:hover":{
                color:palette.primary.dark
            },
        },
        h6:{
            fontSize: "1.2rem",
            fontWeight:"900",
            "&:hover":{
                color:palette.primary.dark
            },
        },
        caption:{
            fontSize: "0.895rem",
            fontWeight:"300",
            color:palette.primary.light,
            fontStyle:"italic",
            "&:hover":{
                textDecoration:"underline",
                color:palette.primary.light,
                fontStyle:"italic",
            }

        },
        subtitle1:{
            fontSize: "1rem",
            fontWeight:"700",
            color: palette.primary.dark
        },
        subtitle2:{
            fontSize: "0.895rem",
            fontWeight:"600",
            color: palette.primary.dark
        },
        body1:{
            fontSize: "0.820rem",
            fontWeight:"300",
            color: palette.common.black
        },

        body2:{
            fontSize: "0.595rem",
            fontWeight:"300",
            color: palette.common.black,
            fontType:"italic"
        }

    }),
    palette: {
        mode: "light",
        primary: {
            main: '#5F2EEA',
            dark: "#2A00A2",
            light: "#BCA4FF",
        },
        secondary: {
            main: '#FF0000',
            dark: "#0096B7",
            light: "#82E9FF"
        },
        error:{
            main: "#ED2E7E",
            dark: "#C30052",
            light: "#FF84B7"
        },
        success:{
            main: "#00BA88",
            dark: "#00966D",
            light: "#34EAB9"
        },
        warning:{
            main: "#F4B740",
            dark: "#946200",
            light: "#FFD789"
        },
        common:{
            black: "#000000",
            white: "#FFFFFF",
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                variant: "primary",
                sx: ButtonCommonStyles(),
                size: "large",
            },
            variants:ButtonVariants()
        },
        MuiAccordion:{
          defaultProps:{
              sx: AccordionDefaultProps()
          },
            variants: AccordionVariants()
        },
        MuiAccordionSummary:{
            defaultProps:{
                sx: AccordionSummaryDefaultProps()
            }
        },
        MuiAccordionDetails:{
            defaultProps:{
                sx:AccordionDetailsDefaultProps()
            }
        },
        MuiInputBase:{
            defaultProps:{
                sx:InputSxDefaultProps()
            },

        },
    }
});
