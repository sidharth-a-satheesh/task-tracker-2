import React from 'react'

const Task = ({item}) => {
  return (
    <div key={item.id} className="task">
            <p>{item.text}</p>
            <p>{item.day}</p>
        </div>
  )
}

export default Task