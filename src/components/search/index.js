import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../../redux/slice/movies.slice';

export default function SearchMovies() {

    const searchMovies = useSelector(state => state.movies.allMovies);
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handFavourite = (movie) => {
        dispatch(addFavourite(movie));
    }

    const filterMovies = searchMovies.filter(item => item.title.toLowerCase().includes(search.toLocaleLowerCase()))


    return (
        <div className='container'>
            <div className='row mt-5 '>
                <div className='col-3 col-sm-2'></div>
                <div className='col-6 col-sm-8'>
                    <div className='form-group'>
                        <h4 className='text-center pb-3 search-head '>Search Movie Here</h4>
                        <input
                            type="text"
                            placeholder='Search Movies..'
                            className='form-control'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className='col-3 col-sm-2'></div>
            </div>
            {
                search.length > 0 ? (<h4 className='head-text-library border-bottom py-3 my-4'>Search results</h4>) : ''
            }
            <div className='row  mb-5'>
                {
                    search !== '' ? (filterMovies.map((movie, index) => {
                        return (

                            <div className='col-12 col-lg-3 col-md-4 col-sm-6 d-flex' key={index}>
                                <div className="card p-3 mt-4" style={{ width: '18rem', backgroundColor: 'rgba(241, 231, 254)' }} >
                                    <img src={movie.path} className="images" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title head-text"> {movie.title} </h5>
                                        <div className='d-flex flex-column'>
                                            <button className='btn btn-primary my-2'>View Detail</button>
                                            <button className='btn btn-primary' onClick={() => handFavourite(movie)} >Add to Library</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : <span></span>
                }
            </div>
        </div>
    )
}
