import { useState,useContext } from "react"
import React from 'react'
import UserContext from '../Context/UserContext'
function Login() {

const [username,setUserName]= useState('');
const[password,setPassword]=useState('');

const {setUser}=useContext(UserContext);
const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username,password})
}
  return (
    <div>
        <h2>Login</h2>
        <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="username"> </input>

        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password"></input>
        <button onClick={handleSubmit}>Submit </button>
    </div>
  )
}

export default Login
