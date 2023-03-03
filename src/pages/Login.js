import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changeUsername } from "../reduxstore/myDataSlice";
import { CurrentUsername, CurrentEmail } from "../reduxstore/myDataSlice";
// import Logout from './Logout'
import "./loginStyle.css";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const[username,setusername]=React.useState("")
  // const[email,setemail]=React.useState("")
  const username = useSelector(CurrentUsername);
  const email = useSelector(CurrentEmail);
  console.log(username);
  console.log(email);
  const clickme = () => {
    if (email === "" && username === "") {
      alert("please Fill the Field");
    } else {
    //   navigate("/Logout", { state: { username, email } });
    navigate("/Logout")
    }
  };
  const authorName = "Ashok";
  const currentyear = "2023";

  return (
    <div className="maincontain">
      <h1>Login Page</h1>
      <input
        placeholder="Enter Name"
        // onChange={(e)=>setusername(e.target.value) }
        onChange={(e) => {
          dispatch(changeUsername(e.target.value));
        }}
      />
      <input
        placeholder="Enter Email"
        //onChange={(e)=>setemail(e.target.value)}
        onChange={(e) => {
          dispatch(changeEmail(e.target.value));
        }}
      />
      <button className="clickbtn" onClick={clickme}>
        Login
      </button>
      <Footer author={authorName} year={currentyear} />
    </div>
  );
}

export default Login;
