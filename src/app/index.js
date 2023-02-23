import React from 'react'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Routings from '../components/routings'
import SearchMovies from '../components/search'

export default function App() {
    return (
        <div className='app'>
            <NavBar />
            <SearchMovies />
            <Routings />
            <Footer />
        </div>
    )
}
