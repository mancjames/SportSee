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
 * averageSessions = [{day: 1, sessionLength:60}, {day: 2, sessionLength:85}]
 * return (
 *   <AverageSpeedGraph averageSessions={props.averageSessions}/>
 * )
 */

   /**
   * CustomToolTip 
   * @param {Boolean} active if bar is selected
   * @param {array} payload provides array data from specific point in line chart
   * @returns custom tool tip showing only the amount of minutes for session
   */
   const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className="averageSpeedGraph__tooltip">
                <p>{`${payload[0].value}min`}</p>
            </div>
        );
    }
    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  }

   /**
   * formatDay
   * @param {integer} input input day number from JSON 
   * @returns the day of the week based on number of day in week - for example day 3 is W for Wednesday
   */
  function formatDay(input){
      switch(input){
        case 1:
          input = 'M';
          break;
        case 2:
          input = 'T';
          break;
        case 3:
          input = 'W';
          break;
        case 4:
          input = 'T';
          break;
        case 5:
          input = 'F';
          break;
        case 6:
        case 7:
          input = 'S';
          break;
        default:
          input = 'unrecognised day'
      }
      return input
  };

export default function AverageSpeedChart(props) {
  console.log(props)

    const data = props.averageSessions.map((d) => ({
        day: formatDay(d.day),
        sessionLength: d.sessionLength
    }));
    
  return (
    <div className="averageSpeedGraph">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
              data={data}
              margin={{
                  top: 90,
                  right: 20,
                  left: 20,
                  bottom: 40
              }}
          >
            <XAxis 
              className="averageSpeedGraph__legend" 
              stroke="white" dataKey="day"  
              axisLine={false} 
              tickLine={false} 
              tickMargin={20}
              dy={20}
            />
            <Tooltip content={<CustomTooltip />}/>

            <defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="40%"   stopColor="rgba(255,255,255,0.5)"/>
                <stop offset="100%" stopColor="#ffffff"/>
              </linearGradient>
            </defs>


            <Line
              dot={false}
              type="natural"
              dataKey="sessionLength"
              stroke="url(#linear)"
              strokeWidth={3}
              activeDot={{ stroke: 'white', strokeWidth: 5, r: 3 }}
              
            />

            <text 
              className="averageSpeedGraph__title"
              fontSize="15px"
              x="15%"
              y="15%"
            > Average speed of</text>
            <text 
              className="averageSpeedGraph__title"
              fontSize="15px"
              x="15%"
              y="24%"
            > your sessions </text>
          </LineChart>
        </ResponsiveContainer>
      </div>
  )
}

AverageSpeedChart.propTypes = {
  averageSessions: PropTypes.arrayOf(
    PropTypes.shape({
        day: PropTypes.number,
        sessionLength: PropTypes.number,
    })
  )
}