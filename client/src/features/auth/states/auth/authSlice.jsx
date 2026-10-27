import { createSlice } from "@reduxjs/toolkit";
import {loginUserAction, registerUserAction} from "../auth/authActions"
let authSlice= createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:false,
        error:null,
        accessToken:null,
    },
    reducers:{
clearError:(state)=>{
state.error=null;
}
    },

    extraReducers:(builder)=>{
builder.addCase(registerUserAction.pending,(state)=>{
    state.isLoading=true;
    state.error=null;
})
.addCase(registerUserAction.fulfilled,(state,action)=>{
    state.isLoading=false;
    state.isAuthenticated=true;
    state.user=action.payload.user;
    state.accessToken=action.payload.accessToken
})
.addCase(registerUserAction.rejected,(state)=>{
    state.isLoading=false;
    state.error=true;
})

// for login 
.addCase(loginUserAction.pending,(state)=>{
    state.isLoading=true;
    state.error=null;
})
.addCase(loginUserAction.fulfilled,(state,action)=>{
    state.isLoading=false;
    state.user=action.payload.user;
    state.isAuthenticated=true;
    state.accessToken=action.payload.accessToken
})
.addCase(loginUserAction.rejected,(state)=>{
    state.isLoading=false;
    state.error=true;
})

    }

})
export const {clearError}= authSlice.actions;
export default authSlice.reducer;