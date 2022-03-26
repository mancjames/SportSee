import React from 'react'
import PropTypes from 'prop-types'
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

  /**
 * Component displaying the user's sessions results with a line chart from 'recharts'
 *
 * @component
 * @example
 * const sessions = [{day: 1, sessionLength:60}, {day: 2, sessionLength:85}]
 *  * return (
 *   <AverageSpeedGraph averageSessions={props.averageSessions}/>
 * )
 */

export default function AverageSpeedChart(props) {


  return (
    <div>AverageSpeedChart</div>
  )
}

AverageSpeedChart.propTypes = {
    sessions: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.number,
            sessionLength: PropTypes.number,
        })
      )
}