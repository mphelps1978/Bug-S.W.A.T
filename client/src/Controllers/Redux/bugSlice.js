import { createSlice } from "@reduxjs/toolkit";
import {retrieveBugs} from '../bugController'

const slice = createSlice({
  
  name: "bug",
  initialState: [],
  reducers: {
    getBugs: state => retrieveBugs(),
        
    createBug: (state, actions) => {
      
    },
    
    updateBug: (state, actions) => {
      
    },
    
    closeBug: (state, actions) => {
      
    }
  }
})