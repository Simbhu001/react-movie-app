import { createSlice } from "@reduxjs/toolkit";
import Hulk from '../../assets/hulk.jpg'
import IronMan from '../../assets/ironman.jpg'
import Thanos from '../../assets/thanos.jpg'
import AntMan from '../../assets/ant-man.jpg'
import BlackPanther from '../../assets/blackpanther.jpg'
import CaptainAmerica from '../../assets/captain.jpg'
import SpiderMan from '../../assets/spiderman.jpg'
import WarMachine from '../../assets/warmachine.jpg'
import RocketRacoon from '../../assets/rocketraccoon.jpg'
import DoctorStrange from '../../assets/doctorStrange.jpg'
import { v4 } from 'uuid';


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        showDetails: [],
        favourite: [],
        allMovies: [
            {
                id: v4(),
                title: "Iron-man",
                year: 1992,
                director: "Jack",
                genre: "Action",
                rate: 4.2,
                path: IronMan
            },
            {
                id: v4(),
                title: "Hulk",
                year: 1993,
                director: "Stephen",
                genre: "Action",
                rate: 4.5,
                path: Hulk
            },
            {
                id: v4(),
                title: "Spider-Man",
                year: 2000,
                director: "Rock",
                genre: "Thriller",
                rate: 4.4,
                path: SpiderMan
            },
            {
                id: v4(),
                title: "Captain-America",
                year: 1990,
                director: "Tom",
                genre: "War",
                rate: 4.5,
                path: CaptainAmerica,
            },
            {
                id: v4(),
                title: "Ant-Man",
                year: 1995,
                director: "Chirist",
                genre: "Adventure",
                rate: 4.4,
                path: AntMan
            },
            {
                id: v4(),
                title: "Black-Panther",
                year: 1996,
                director: "Harry",
                genre: "Action",
                rate: 4.2,
                path: BlackPanther
            },
            {
                id: v4(),
                title: "Doctor-Strange",
                year: 1997,
                director: "Peter",
                genre: "war",
                rate: 4.4,
                path: DoctorStrange
            },
            {
                id: v4(),
                title: "Thanos",
                year: 1991,
                director: "James",
                genre: "Thriller",
                rate: 4.1,
                path: Thanos
            },
            {
                id: v4(),
                title: "War-Machine",
                year: 1998,
                director: "jack",
                genre: "War",
                rate: 4.0,
                path: WarMachine
            },
            {
                id: v4(),
                title: "Rocket-Racoon",
                year: 1992,
                director: "Stanly",
                genre: "Action",
                rate: 4.3,
                path: RocketRacoon
            },

        ],

    },
    reducers: {

        addFavourite: (state, action) => {
            state.favourite = [...state.favourite, action.payload]
        },
        deleteMovie: (state, action) => {
            state.favourite = state.favourite.filter(movie => movie.id !== action.payload);
        },
        showDetailsMovie: (state, action) => {
            state.showDetails = [action.payload]
        }
    }
});


export const { addFavourite, deleteMovie, showDetailsMovie } = moviesSlice.actions;
export default moviesSlice.reducer;