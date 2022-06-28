import React from 'react'

const Button = ({color, background}) => {
  return (
    <button className='custom-btn' style={{color: color, backgroundColor: background}}>Add</button>
  )
}

export default Button

Button.defaultProps = {
  color: "white",
  background: "black",
}