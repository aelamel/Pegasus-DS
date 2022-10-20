import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";


export interface ButtonProps extends Pick<MuiButtonProps, 'sx' | 'disabled' | 'color' | 'fullWidth' | 'startIcon' | 'endIcon' | 'size' | 'variant'> {
    label: string;
}

export const Button = ({label, ...props}: ButtonProps) => {

    return (
        <MuiButton disableElevation {...props} >{label}</MuiButton>
    )
};
