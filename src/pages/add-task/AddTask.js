import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'


const AddTask = () => {
  return (
    <div className='mt-5'>
        <div className='mb-3'>
            <label class="form-label">Enter Task</label>
            <input type="text"
            className="form-control"
            placeholder="Task" /> 
            {/* Add closing Tag for input */}
        </div>
        <div className='mb-3'>
            <label class="form-label">Day</label>
            <input type="text"
            className="form-control"
            placeholder="Day" /> 
            {/* Add closing Tag for input */}
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label" for="flexCheckDefault">
                Set Remainder
            </label>
        </div>
        <div className='text-center mt-4 mb-5'>
            <Link to="/">
                <button className='btn btn-success add-task-btn'>Add Task</button>
            </Link>
        </div>
    </div>
  )
}

export default AddTask