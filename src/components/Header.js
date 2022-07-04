import React from 'react'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'


const Header = ({title}) => {
    let location = useLocation();
    console.log(location)
    let displayBtn = () =>{
        if(location.pathname=="/add-task"){
            return null;
        }else{
            return(
                <Link to="/add-task"><Button color="white" background="green" /></Link>
            );
        }
    }
    return (
        <div className='header'>
            <h1>{title}</h1>    

            {/* <Link to="/add-task">
                {
                    location.pathname!='/add-task'?<Button color="white" background="green" />:< ></>
                }
            </Link> */}
            {displayBtn()}
        </div>
    )   
}

export default Header