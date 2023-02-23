import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addFavourite, showDetailsMovie } from '../../redux/slice/movies.slice';

export default function MovieCards() {

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.allMovies);

    const handFavourite = (movie) => {
        dispatch(addFavourite(movie));
    }
    return (
        <div className='container'>
            <h4 className='head-text-library py-3 border-bottom'> all Movies list</h4>
            <div className='row'>
                {
                    movies.map((movie, index) => {
                        return (
                            <div className='col-12 col-lg-3 col-md-4 col-sm-6 d-flex card-hover' key={index}>
                                <div className="card p-3 mt-4" style={{ width: '18rem', backgroundColor: 'rgba(241, 231, 254)' }} >
                                    <img src={movie.path} className="images" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title head-text"> {movie.title} </h5>
                                        <div className='d-flex flex-column'>
                                            <button className='btn btn-primary my-2'
                                                onClick={() => dispatch(showDetailsMovie(movie))}>
                                                <Link to="/movies/details" className='link-style-detail' >View Detail</Link>
                                            </button>
                                            <button className='btn btn-primary' onClick={() => handFavourite(movie)}>Add to Library</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
