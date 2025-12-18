import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Header() {
return (
<AppBar position="static">
<Toolbar>
<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
<MenuIcon />
</IconButton>
<Typography variant="h6" component="div">PLM Portal</Typography>
</Toolbar>
</AppBar>
)
}