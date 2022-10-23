import {SxProps} from "@mui/material";


export const InputSxDefaultProps = (): SxProps => ({
    borderRadius:"16px",
    fontWeight:400,
    fontSize:"16px",
    color:"#A0A3BD",
    backgroundColor:"#EFF0F6",
    "&:active":{
        color:"#A0A3BD",
        backgroundColor:"#EFF0F6",
        border:"1px solid black",
    },
    "&:hover":{
        color:"#A0A3BD",
        backgroundColor:"#EFF0F6",
        border:"1px solid black",
    },
});

