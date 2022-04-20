import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

// Reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/userSlice'


// Configuring Store

const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer
})

const store = configureStore({reducer})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}><App/></Provider>
)
