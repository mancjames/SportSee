import React from 'react'

import useFetch from '../utils/hooks/useFetch'

import Header from './Header'
import StatsSection from './StatsSection'

export default function Dashboard() {
    const { response : user, loading } = useFetch('http://localhost:3000/user/18')
    const { response: activity, loading: loadingActivity } = useFetch('http://localhost:3000/user/12/activity')
    const { response: averageSessions, loading: loadingSessions } = useFetch('http://localhost:3000/user/12/average-sessions')
    const { response: performance, loading: loadingPerformance } = useFetch('http://localhost:3000/user/12/performance')

  return (
    <main className="dashboard__container">
        {loading ? (
        'Loading...'
      ) : (
            <Header name={user.data.userInfos.firstName} />
      )}
      {(!loadingActivity && !loadingSessions && !loadingPerformance) ? (
          <StatsSection activity={activity} averageSessions={averageSessions} performance={performance} score={user.data.todayScore || user.data.score} nutrition={user.data.keyData}/>
      ) : (
        'Loading...'
      )
      }
    </main>
  )
}
