import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../slice/movies.slice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice,
    },
    devTools: true
})