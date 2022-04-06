import React from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../utils/hooks/useFetch'
import Header from './Header'
import StatsSection from './StatsSection'
import Error from './Error';

export default function Dashboard() {
    let { id } = useParams()
    const { response : user, loading, error } = useFetch(`http://localhost:3000/user/${id}`)
    const { response: activity, loading: loadingActivity } = useFetch(`http://localhost:3000/user/${id}/activity`)
    const { response: averageSessions, loading: loadingSessions } = useFetch(`http://localhost:3000/user/${id}/average-sessions`)
    const { response: performance, loading: loadingPerformance } = useFetch(`http://localhost:3000/user/${id}/performance`)

  if (error) return <Error />
  return (
    <main className="dashboard__container">
      {(!loading && !loadingActivity && !loadingSessions && !loadingPerformance) ? (
        <div className="dashboard__main">
          <Header name={user.data.userInfos.firstName} />
          <StatsSection activity={activity} averageSessions={averageSessions} performance={performance} score={user.data.todayScore || user.data.score} nutrition={user.data.keyData}/>
        </div>
      ) : (
        'Loading...'
      )
      }
    </main>
  )
}
