import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Logout() {
    const location = useLocation()
    const navigate= useNavigate();
    const clickout =()=>{
        navigate("/")  
    }
    console.log(location.state)
    const username=location.state.username
    const email=location.state.email
  return (
 
    <div>
        <h1>Welcom {username}</h1>
        <p>{email}</p>
        
        <button onClick={clickout}>Logout</button>
    </div>
  )
}

export default Logout