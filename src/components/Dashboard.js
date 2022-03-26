import React from 'react'

import useFetch from '../utils/hooks/useFetch'

import Header from './Header'
import StatsSection from './StatsSection'

export default function Dashboard() {
    const { response : user, loading } = useFetch('http://localhost:3000/user/12')
    const { response: activity, loading: loadingActivity } = useFetch('http://localhost:3000/user/12/activity')
    const { response: averageSessions, loading: loadingSessions } = useFetch('http://localhost:3000/user/12/average-sessions')
    // const { response: performance } = useFetch('http://localhost:3000/user/12/performance')

  return (
    <main className="dashboard__container">
        {loading ? (
        'Loading...'
      ) : (
            <Header name={user.data.userInfos.firstName} />
      )}
      {(loadingActivity && loadingSessions) ? (
          'Loading...'
      ) : (
        <StatsSection activity={activity} averageSessions={averageSessions} />
      )
      }
    </main>
  )
}
