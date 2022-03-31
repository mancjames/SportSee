import React from 'react'
import DailyActivityGraph from './DailyActivityGraph'
import AverageSpeedChart from './AverageSpeedChart'
import PerformanceRadarChart from './PerformanceRadarChart'
import ScoreGraph from './ScoreGraph'
import NutritionCard from './NutritionCard'

export default function StatsSection(props) {
  return (
    <section className="statsSection">
      <div className="statsSection__activity">
       <DailyActivityGraph activity={props.activity} />
        <div className="statsSection__activity-detail">
        <AverageSpeedChart averageSessions={props.averageSessions} />
        <PerformanceRadarChart kind={props.performance.data.kind} data={props.performance.data.data} />
        <ScoreGraph score={props.score}/>
        </div>
      </div>
       <div className="statsSection__nutrition">
        <NutritionCard type="calories" value={props.nutrition.calorieCount}/>
        <NutritionCard type="proteins" value={props.nutrition.proteinCount}/>
        <NutritionCard type="carbs" value={props.nutrition.carbohydrateCount}/>
        <NutritionCard type="lipids" value={props.nutrition.lipidCount}/>
       </div>
    </section>
  )
}
