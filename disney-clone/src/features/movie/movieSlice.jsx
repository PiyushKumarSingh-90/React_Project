//movieSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recommend: [], // Initialize as an empty array instead of null
    newDisney: [],
    original: [],
    trending: [],
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        // This reducer will update the state with movie data
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },
});

// Selectors to get data from Redux store
export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
