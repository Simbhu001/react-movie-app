import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteMovie, showDetailsMovie } from '../../redux/slice/movies.slice';

export default function UserLibrary() {
    const dispatch = useDispatch();
    const libraryMovies = useSelector(state => state.movies.favourite);


    return (
        <div className='container'>
            <h4 className='border-bottom py-3 head-text-library'>LIBRARY MOVIES</h4>
            <div className='row'>
                {
                    libraryMovies.length > 0 ? (libraryMovies.map((movie, index) => {
                        return (
                            <div className='col-12 col-lg-3 col-md-4 col-sm-6 d-flex' key={index}>
                                <div className="card p-3 mt-4 " style={{ width: '18rem', backgroundColor: 'rgba(241, 231, 254)' }} >
                                    <img src={movie.path} className="images" alt="..." />
                                    <div className="card-body" >
                                        <h5 className="card-title">{movie.title}</h5>
                                        <div className='d-flex flex-column'>
                                            <button className='btn btn-primary my-2'
                                                onClick={() => dispatch(showDetailsMovie(movie))}>
                                                <Link to="/movies/details" className='link-style-detail'>View Detail</Link>
                                            </button>
                                            <button
                                                className='btn btn-primary'
                                                onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : <div className='row' style={{ height: "70vh", width: "100%" }}>
                        <div className='text-center mt-5'>
                            <h5 className='text-danger'>-- Library  Movies Not Found --</h5>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
