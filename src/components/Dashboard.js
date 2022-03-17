import React from 'react'

import useFetch from '../utils/hooks/useFetch'

import Header from './Header'

export default function Dashboard() {
    const { response, loading } = useFetch('http://localhost:3000/user/12')

  return (
    <main className="dashboard__container">
        {loading ? (
        'Loading...'
      ) : (
        <Header name={response.data.userInfos.firstName} />
      )}
    </main>
  )
}
