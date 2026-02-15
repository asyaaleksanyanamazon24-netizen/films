import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const FILM_URL = "/api/films";

export const fetchFilm = createAsyncThunk(
    'film/fetchFilm',
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(id ? `${FILM_URL}/${id}` : FILM_URL);
            return res.data;
        } catch (e) {
          return   rejectWithValue(e.messsage)
        }
    })

const filmSlice = createSlice({
    name: 'film',
    initialState: {
        films: [],
        loading: true,
        error: null
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilm.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchFilm.fulfilled, (state, action) => {
                state.loading = false;
                state.films = Array.isArray(action.payload)
                    ? action.payload
                    : [action.payload];
            })
    }
})


export default filmSlice.reducer