import React from 'react'
import WidgetCard from '../src/components/WidgetCard'

export default {
title: 'Components/WidgetCard',
component: WidgetCard
}


export const Default = () => <WidgetCard title="Active Devices" value="1,234" />
export const Empty = () => <WidgetCard title="No Data" />