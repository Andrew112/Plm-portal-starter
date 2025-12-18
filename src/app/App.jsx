import { Box, CssBaseline, ThemeProvider } from '@mui/material'

import DashboardGrid from '../components/DashboardGrid'
import Header from '../components/Header'
import React from 'react'
import Sidebar from '../components/Sidebar'
import theme from '../theme/muiTheme'

export default function App() {
return (
<ThemeProvider theme={theme}>
<CssBaseline />
<Header />
<Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
<Sidebar />
<Box component="main" sx={{ flex: 1, p: 3, overflow: 'auto' }}>
<DashboardGrid />
</Box>
</Box>
</ThemeProvider>
)
}