import MuiTypography, {TypographyProps} from "@mui/material/Typography";


const Typography = (props: TypographyProps) => {

    const {children, ...rest} = props;

    return (
        <MuiTypography {...rest}>{children}</MuiTypography>
    );
};

export default Typography;
