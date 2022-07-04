import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const AddTask = () => {
    const [text, setText] =useState("");
    const [day, setDay] =useState("");
    const [reminder, setReminder] =useState(false);

const onFormSubmit = (e) => {
    e.preventDefault();
    let newTask = {
        text: text,
        day: day,
        reminder: reminder,
    };
    console.log(newTask);
};

    return (
    <div className='mt-5'>
        <form onSubmit={onFormSubmit}>
            <div className='mb-3'>
                <label className="form-label">Enter Task</label>
                <input type="text"
                className="form-control"
                placeholder="Task"
                onChange={(e)=> setText(e.target.value)}
                value={text}
                />
                {/* Add closing Tag for input */}
            </div>
            <div className='mb-3'>
                <label className="form-label">Day</label>
                <input type="text"
                className="form-control"
                placeholder="Day"
                onChange={(e)=> setDay(e.target.value)}
                value={day}
                />
                {/* Add closing Tag for input */}
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
            
                onChange={(e)=> setReminder(!reminder)}
                value={reminder}
                />
                <label className="form-check-label">
                    Set Remainder
                </label>
            </div>
            <div className='text-center mt-4 mb-5'>
                <button type="submit" className='btn btn-success add-task-btn'>Add Task</button>
            </div>
        </form>
        <Link to="/">
            <p className='text-center'>Back to home</p>
        </Link>
    </div>
    )
}

export default AddTask