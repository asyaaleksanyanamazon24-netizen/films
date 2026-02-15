import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const MENU_URL = "/api/menu"

export const fetchMenu = createAsyncThunk(
    'menu/fetchMenu',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(MENU_URL);
            return res.data;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })


const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenu.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenu.fulfilled, (state, action) => {
                state.loading = false;
                state.menu = action.payload;
            })
            .addCase(fetchMenu.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})

export default menuSlice.reducer;