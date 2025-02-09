import React from 'react'
import DataListinings from '../components/DataListinings'
import HomeCard from '../components/HomeCard'
import MainBanner from '../components/MainBanner'

import ViewAllData from '../components/ViewAllData'

export default function Index() {
  return (
    <>
      <MainBanner
        title="Развивайся вместе с React"
        subtitle="И получи работу мечты"
      />
      <HomeCard />
      <DataListinings />
      <ViewAllData />
    </>
  )
}
