import React, { useState } from 'react'
import Task from './Task'

let tasksInitial = [
    {
        id: 1,
        text: "MongoDB",
        day: "21-05-2022 5pm",
        remainder: false,
    },
    {
        id: 2,
        text: "Express",
        day: "21-05-2022 5pm",
        remainder: false,
    },
    {
        id: 3,
        text: "React",
        day: "21-05-2022 5pm",
        remainder: false,
    },
    {
        id: 4,
        text: "NodeJS",
        day: "21-05-2022 5pm",
        remainder: true,
    },
];
const Tasks = () => {
    
    const [tasks, setTasks] = useState(tasksInitial);//Passing an empty array   
    return (

        
        <div className='tasks mt-5'>
            {tasks.length > 0?
                tasks.map((task) => {
                    return <Task item={task} />
                }):(
                    <p>No Tasks To Show Yet</p>
                )
            }
        </div>
    )
}

export default Tasks