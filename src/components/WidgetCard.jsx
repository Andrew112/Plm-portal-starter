import { Card, CardContent, Typography } from '@mui/material'

import React from 'react'

export default function WidgetCard({ title, value, height = 120 }) {
return (
<Card sx={{ height }}>
<CardContent>
<Typography variant="subtitle2" gutterBottom>{title}</Typography>
<Typography variant="h5">{value ?? '—'}</Typography>
</CardContent>
</Card>
)
}