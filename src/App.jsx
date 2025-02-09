import DataListinings from './components/DataListinings'
import HomeCard from './components/HomeCard'
import MainBanner from './components/MainBanner'
import Navbar from './components/Navbar'
import React from 'react'

export default function App() {
  return (
    <>
      <Navbar />
      <MainBanner
        title="Развивайся вместе с React"
        subtitle="И получил работу мечты"
      />
      <HomeCard></HomeCard>
      <DataListinings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          {/* View All Jobs */}
        </a>
      </section>
    </>
  )
}
