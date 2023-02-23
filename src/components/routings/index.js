import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieCards from '../cards'
import Details from '../details'
import UserLibrary from '../library/user.library'

export default function Routings() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MovieCards />} ></Route>
                <Route path='/movies/library' element={<UserLibrary />} ></Route>
                <Route path='/movies/details' element={<Details />} ></Route>
            </Routes>
        </div>
    )
}
