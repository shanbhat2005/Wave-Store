import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, refreshApi, registerApi } from "../../api/authApi";

export const loginUserAction=createAsyncThunk('auth/login',
    async(credentials,thunkApi)=>{
        try {
            const response= await loginApi(credentials);
            return response.data.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data?.message||"Login failed")
        }

})

export const registerUserAction= createAsyncThunk("auth/register",
    async(credentials,thunkApi)=>{
try {
    const response= await registerApi(credentials);
    return response.data.data
} catch (error) {
    return thunkApi.rejectWithValue(error.response?.data?.message||"Register failed")
}
})

export const refreshUserAction= createAsyncThunk("auth/refresh",
    async(_,thunkApi)=>{
try {
    const response= await refreshApi();
    return response.data.data;
} catch (error) {
    return thunkApi.rejectWithValue(
        error.response?.data?.message || "Session could not be restored"
    )
}
    })