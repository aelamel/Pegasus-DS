
import TextField, {TextFieldProps} from "@mui/material/TextField";


const Input = (props: TextFieldProps) => {

    const {InputProps}= props;
    return (

        <TextField
            variant="filled"
            InputProps={{...InputProps, disableUnderline: true}}
            {...props}
        />
    );
};

export default Input;
