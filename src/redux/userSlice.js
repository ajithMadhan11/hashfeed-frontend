import {createSlice} from '@reduxjs/toolkit';


const initialState = [];
export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        
    }
})

export const {}=userSlice.actions;
export const selectTodos=(state)=>state.todo;
export default userSlice.reducer;