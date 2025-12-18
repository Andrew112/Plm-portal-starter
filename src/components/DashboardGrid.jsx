import { Grid } from '@mui/material'
import React from 'react'
import WidgetCard from './WidgetCard'

export default function DashboardGrid() {
return (
<Grid container spacing={2}>
<Grid item xs={12} md={6} lg={3}><WidgetCard title="Active Devices" value="1,234" /></Grid>
<Grid item xs={12} md={6} lg={3}><WidgetCard title="Incidents (24h)" value="12" /></Grid>
<Grid item xs={12} md={6} lg={3}><WidgetCard title="Avg Response" value="120 ms" /></Grid>
<Grid item xs={12} md={6} lg={3}><WidgetCard title="Utilization" value="73%" /></Grid>
<Grid item xs={12}><WidgetCard title="Recent Alerts" height={360} /></Grid>
</Grid>
)
}