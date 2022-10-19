import {SxProps, ComponentsVariants, Theme} from "@mui/material"

export const ButtonCommonStyles = (): SxProps=>({
    borderRadius: 50
});



export const ButtonVariants = (): ComponentsVariants['MuiButton'] => ([
    {
        props: {variant: "primary"},
        style: (props)  => ({
            backgroundColor: props.theme.palette.primary.main,
            color: props.theme.palette.common.white,
            '&:hover':{
                backgroundColor: props.theme.palette.primary.dark
            },
            '&:active':{
                backgroundColor: props.theme.palette.common.black
            },
            '&:focus':{
                border: "2px solid #FCFCFC",
            }
        })
    },
    {
        props: {variant: "secondary"},
        style: (props) => ({
            borderColor: props.theme.palette.primary.main,
            borderWidth: 1,
            borderStyle:"solid",
            color: props.theme.palette.primary.main,
            '&:hover':{
                borderColor: props.theme.palette.primary.dark,
                color: props.theme.palette.primary.dark,
                backgroundColor: props.theme.palette.common.white,
            },
            '&:active':{
                borderColor: props.theme.palette.common.black,
                color: props.theme.palette.common.black,
                backgroundColor: props.theme.palette.common.white,
            },
            '&:focus':{
                border: "2px solid #FCFCFC",
            }
        }),
    },

    {
        props: {disabled:true},
        style: (props)=> ({
            backgroundColor: props.theme.palette.primary.main,
            opacity: 0.5,
            color: `${props.theme.palette.common.white}!important`,

        })
    },
    {
        props: {size:"small"},
        style: props => ({
            padding: '3px 9px',
            fontSize: "13px"
        }),
    },
    {
        props: { size:"medium"},
        style: props => ({
            padding: '6px 16px',
            fontSize: "14px"
        }),
    },
    {
        props: { size:"large"},
        style: props => ({
            padding: '8px 22px',
            fontSize: "15px"
        }),
    }
]);

