import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions/registerActions.js";
import {userLogin} from "../actions/loginActions.js";
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
};

const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
        ,
        builder.addCase(userLogin.pending,(state)=>{
            state.loading = true
            state.error = null
        })

            .addCase(userLogin.fulfilled,(state,{payload})=>{
                state.loading = false
                state.userInfo = payload
                state.userToken = payload.userToken
            }).addCase(userLogin.rejected,(state,{payload})=>{
            state.loading = false
            state.error = payload
            });


    },
});

export default userSlice.reducer;





