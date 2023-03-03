import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { CurrentEmail, CurrentUsername } from '../reduxstore/myDataSlice';

function Logout() {
    // const location = useLocation()
    const navigate= useNavigate();
    const clickout =()=>{
        navigate("/")  
    }
    // console.log(location.state)
    // const username=location.state.username
    // const email=location.state.email
    const username =useSelector(CurrentUsername)
    const email=useSelector(CurrentEmail)
 
  return (
 
    <div>
        <h1>Welcom {username}</h1>
        <p style={{color:"red"}}>{email}</p>
        
        <button onClick={clickout}>Logout</button>
    </div>
  )
}

export default Logout