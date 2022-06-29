import React from 'react'
import './app.scss'
import Header from './components/Header'
import Tasks from './pages/task/Tasks'
import Footer from './components/Footer'
import AddTask from './pages/add-task/AddTask'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header title={"TO-DO"} />
        <Routes>
          <Route path='/' element={<Tasks />} />
          <Route path='/add-task' element={<AddTask />} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
