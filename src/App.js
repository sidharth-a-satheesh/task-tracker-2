import React from 'react'
import './app.scss'
import Header from './components/Header'
import Tasks from './pages/task/Tasks'
import Footer from './components/Footer'
import AddTask from './pages/add-task/AddTask'

export default function App() {
  return (
    <div>
      <div className="container">
        <Header title={"TO-DO"} />
        {/* <Tasks /> */}
        <AddTask />
        <Footer />
      </div>
      
    </div>
  )
}
