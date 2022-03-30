import React from 'react'
import DailyActivityGraph from './DailyActivityGraph'
import AverageSpeedChart from './AverageSpeedChart'
import PerformanceRadarChart from './PerformanceRadarChart'
import ScoreGraph from './ScoreGraph'

export default function StatsSection(props) {
  return (
    <section className="statsSection">
       <DailyActivityGraph activity={props.activity} />
       <div className="statsSection-bottom">
       <AverageSpeedChart averageSessions={props.averageSessions} />
       <PerformanceRadarChart kind={props.performance.data.kind} data={props.performance.data.data} />
       <ScoreGraph score={props.score}/>
       </div>
    </section>
  )
}
