// steps for state management 
// submit action 
// habdle action in it,s reducer 
// register here -> reducer
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer/index.js";
import postReducer from "./reducer/postReducer/index.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        postReducer: postReducer,
    },
});