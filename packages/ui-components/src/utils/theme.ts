import { createTheme } from '@mui/material/styles';
import {ButtonCommonStyles, ButtonVariants} from "../components/Button/styles";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true
    }
}
export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#5F2EEA',
            dark: "#2A00A2",
            light: "#BCA4FF"
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
            white: "#FFFFFF"
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
        }
    }
});
