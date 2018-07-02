import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import React from 'react'

const Chart = (data) => {
  return (
  	<BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <CartesianGrid strokeDasharray="3 3"/>
     <XAxis dataKey="answers"/>
     <YAxis/>
     <Tooltip/>
     <Legend />
     <Bar dataKey="pv" fill="#8884d8" />
     <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  )
}

export default Chart