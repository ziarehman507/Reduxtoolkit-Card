import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email:''
 };

const userSlice = createSlice({
  
   name:'user' ,
   initialState,
      reducers: {
          setData: (state, action) => {
            let newState = {
              ...action.payload
            }

            console.log("sadsadasdas ", action.payload, newState)
           
            return newState;
          }
      }
});

export const { setData } = userSlice.actions

export default userSlice. reducer;