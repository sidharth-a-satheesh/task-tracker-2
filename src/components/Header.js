import React from 'react'
import Button from './Button'

const Header = ({title}) => {
    return (
        <div className='header'>
        <h1>{title}</h1>    
        <Button color="white" background="green" />
        </div>
    )   
}

export default Header