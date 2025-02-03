import { configureStore } from "@reduxjs/toolkit";
import apiReducer from '../redux/apiSlice';

const store = configureStore({
    reducer:{
        inc:apiReducer
    }
})

export default store

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;