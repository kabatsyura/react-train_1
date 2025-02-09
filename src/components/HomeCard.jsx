import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function HomeCard() {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
              <h2 className="text-2xl font-bold">Для разработчиков</h2>
              <p className="mt-2 mb-4">
                Добавь свое резюме и начни карьеру сейчас
              </p>
              <Link
                to="/jobs"
                className="inlin e-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Начать
              </Link>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold">Для работодатетелей</h2>
              <p className="mt-2 mb-4">
                Размести вакансию, чтобы найти разработчика
              </p>
              <Link
                to="/add-job"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Добавить вакансию
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
