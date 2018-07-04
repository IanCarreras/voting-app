import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import React from 'react'

const Chart = (data) => {
  return (
  	<BarChart width={600} height={300} data={data.answers}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <CartesianGrid strokeDasharray="3 3"/>
     <XAxis dataKey="answers"/>
     <YAxis/>
     <Tooltip/>
     <Legend />
     <Bar dataKey="pv" fill="#8884d8" />
    </BarChart>
  )
}

export default Chart
