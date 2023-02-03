import { configureStore, createSlice } from "@reduxjs/toolkit";

//creating the slice of the authantication
//3 parameters 
const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {  //two reduces fns login and logout
        //both of the function will having the access to the "states" of redux
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            localStorage.removeItem("userId");
            state.isLoggedIn = false;
        },
    },
});

export const authActions = authSlice.actions;

export const store = configureStore({
    //for single reducers, just do like this
    reducer: authSlice.reducer,
    //for multiple reducers we neeed to make an object
});