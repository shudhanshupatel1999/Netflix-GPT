import { configureStore } from '@reduxjs/toolkit';
import  useReducer  from './userSlice';
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice"; // Add your GPT reducer here

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies: moviesReducer,
        gpt: gptReducer, // Add your GPT reducer here
    },
})

export default appStore;