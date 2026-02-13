import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Slices/MenuSlice.js";
import filmReducer from "./Slices/FilmSlice.js"

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        film: filmReducer
    }
})