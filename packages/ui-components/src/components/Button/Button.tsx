import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";


export interface ButtonProps extends Pick<MuiButtonProps, 'sx' | 'disabled' | 'color' | 'fullWidth' | 'startIcon' | 'endIcon' | 'size'> {
    label: string;
}

export const Button = ({label, ...props}: ButtonProps) => {

    return (
        <MuiButton variant="contained" disableElevation {...props} >{label}</MuiButton>
    )
}