import React from 'react'
import './app.scss'
import Header from './components/Header'
import Tasks from './pages/task/Tasks'

export default function App() {
  return (
    <div>
      <div className="container">
        <Header title={"TO-DO"} />
        <Tasks />
      </div>
    </div>
  )
}
