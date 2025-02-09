import React from 'react'
import PropTypes from 'prop-types'

Card.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
}

export default function Card({ children, bg = 'bg-gray-100' }) {
  return (
    <>
      <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
    </>
  )
}
