import React from 'react'
import DailyActivityGraph from './DailyActivityGraph'

export default function StatsSection(props) {
  return (
    <section>
       <DailyActivityGraph activity={props.activity} />
    </section>
  )
}
