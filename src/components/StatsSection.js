import React from 'react'
import DailyActivityGraph from './DailyActivityGraph'
import AverageSpeedChart from './AverageSpeedChart'

export default function StatsSection(props) {
  return (
    <section>
       <DailyActivityGraph activity={props.activity} />
       <AverageSpeedChart averageSessions={props.averageSessions} />
    </section>
  )
}
