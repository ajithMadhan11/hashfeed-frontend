import {createSlice} from '@reduxjs/toolkit';


const initialState = [];
export const userSlice =createSlice({
    name:'user',
    initialState:{
        user:JSON.parse(localStorage.getItem("jwt")) ||null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload
        },
        logout:(state)=>{
            state.user=null
        }
    }
})

export const {login,logout}=userSlice.actions;
export const selectUsers=(state)=>state.user.user;
export default userSlice.reducer;