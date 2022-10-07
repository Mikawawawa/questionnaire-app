import { Component, useEffect } from 'react'
import { HistoryCard } from '@/components/Flow/HistoryCard'
import { useQueryUser } from '@/utils/hooks/useQueryUser'

const Index = () => {
  useQueryUser()

  return (
    <div className='page space-y-6'>
      {Array(10).fill(0).map(item => <HistoryCard />)}
    </div>
  )
}

export default Index
