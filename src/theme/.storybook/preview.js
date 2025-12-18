import React from 'react'
import { ThemeProvider } from '@mui/material'
import theme from '../src/theme/muiTheme'

export const decorators = [Story => (
<ThemeProvider theme={theme}><Story /></ThemeProvider>
)]


export const parameters = { actions: { argTypesRegex: '^on[A-Z].*' } }