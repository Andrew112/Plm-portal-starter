import { Drawer, List, ListItem, ListItemText } from '@mui/material'

import React from 'react'

const drawerWidth = 240
export default function Sidebar() {
return (
<Drawer variant="permanent" sx={{
width: drawerWidth,
flexShrink: 0,
'& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
}}>
<List>
{['Overview','Assets','Alerts','Settings'].map((text) => (
<ListItem button key={text}><ListItemText primary={text} /></ListItem>
))}
</List>
</Drawer>
)
}