import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../Component/Footer';
// import Logout from './Logout'
import './loginStyle.css'
function Login() {
    const navigate= useNavigate();
    const[username,setusername]=React.useState("")
    const[email,setemail]=React.useState("")
    console.log(username)
    console.log(email)
    const clickme =()=>{
        if(email==="" && username===""){
            alert("please Fill the Field")
        }
        else{
        navigate("/Logout",{state:{username,email}})
    }
    }
  const authorName= "Ashok"
  const currentyear="2023"

  return (
    
    <div className='maincontain'>
        
        <h1>
            Login Page
        </h1>
        <input placeholder='Enter Name' onChange={(e)=>setusername(e.target.value) }/>
        <input placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)}/> 
        <button className='clickbtn' onClick={clickme}>Login</button>
        <Footer author={authorName}  year={currentyear}/>
    </div>
  )
}

export default Login