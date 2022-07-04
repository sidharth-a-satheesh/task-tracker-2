import React from 'react'

const Task = ({item}) => {
  return (
    <div key={item.id} className="task">
      <div>
        <p>{item.text}</p>
        <p>{item.day}</p>
      </div>
      <i className="fa-solid fa-xmark"></i>
    </div>
  )
}

export default Task