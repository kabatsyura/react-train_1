import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-red-600 text-6xl mb-4" />
        <h1 className="text-6xl font-bold mb-4">404 Ошибка</h1>
        <p className="text-xl mb-5">Это говорит, что Вы заблудились</p>
        <Link
          to="/"
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >
          На главную
        </Link>
      </section>
    </>
  )
}
