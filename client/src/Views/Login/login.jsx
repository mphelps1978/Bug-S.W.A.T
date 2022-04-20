import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {signIn} from '../../Controllers/Redux/authSlice'
import './login.css'

export default () => {
  const dispatch = useDispatch()
  const [formInput, setFormInput] = useState({
    name: "",
    password: ""
  })
  
  const inputChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }
  
  const submit = e => {
    e.preventDefault()
    dispatch(signIn(formInput))
    
  }
  return (
    <div className="loginBG">
    <form action="" className="login-panel">
      <h1>Login:</h1>
      <input name="name" placeholder="Name" onChange={inputChange} value={formInput.name}></input>
      <input name="password" type="password" placeholder="Password" onChange={inputChange } value={formInput.password}></input>
      <button type="submit" onClick={submit}>Login</button>  
    </form>
    </div>
  )
}