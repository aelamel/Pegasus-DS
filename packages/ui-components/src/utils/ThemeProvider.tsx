
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from './theme'

export const ThemeProvider = ({children}: React.PropsWithChildren) => {
    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
}