import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

ShowListing.propTypes = {
  job: PropTypes.object.isRequired,
}

export default function ShowListing({ job }) {
  const [showFullDescription, setShowFullDescription] = useState(false)
  let jobDescription = job.description

  if (!showFullDescription) {
    jobDescription = jobDescription.substring(0, 110) + '...'
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-md flex flex-col h-full">
        <div className="p-4 flex-grow">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>
          <div className="mb-5">{jobDescription}</div>
          <button
            className="text-indigo-500 mb-5 hover:text -indigo-600"
            onClick={() => setShowFullDescription((prevState) => !prevState)}
          >
            {showFullDescription ? 'Скрыть' : 'Расскрыть'}
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
          <div className="border border-gray-100"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between p-4">
          <div className="text-orange-700 mb-3 flex items-center">
            <FaMapMarker className="inline text-lg mb-1" />
            <span className="ml-2">{job.location}</span>
          </div>
          <Link
            to={`job/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Изучить
          </Link>
        </div>
      </div>
    </>
  )
}
