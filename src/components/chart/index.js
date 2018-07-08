import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import React from 'react'
import _ from 'lodash'

const Chart = (props) => {

  const chartData = _.map(props.data, (value, name) => { return { name, value } });

  return (
  	<BarChart
      className="bar-chart"
      width={600}
      height={300}
      data={chartData}
      margin={{top: 5, right: 30, left: 50, bottom: 5}}
    >
     <CartesianGrid strokeDasharray="3 3"/>
     <XAxis dataKey="name"/>
     <YAxis/>
     <Tooltip/>
     <Legend />
     <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  )
}

export default Chart
