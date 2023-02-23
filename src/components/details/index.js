import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite } from '../../redux/slice/movies.slice';

export default function Details() {
    const showDetail = useSelector(state => state.movies.showDetails);
    const dispatch = useDispatch();


    const handFavourite = (movie) => {
        dispatch(addFavourite(movie));
    }
    return (
        <div className='container'>
            <h4 className='head-text-library py-3 border-bottom mb-5'>Movies Detail</h4>
            <div className='row'>
                {
                    showDetail.length > 0 ? (showDetail.map((movie, index) => {
                        return (
                            <div className='col-12 col-lg-3 col-md-4 col-sm-6' key={index} style={{ width: '50rem', height: "400px", backgroundColor: 'rgba(241, 231, 254)' }} >
                                <div className='row d-flex justify-content-between '>
                                    <div className='col-6 col-sm-6 mt-4'>
                                        <div className="card"  >
                                            <img src={movie.path} className="images-detail" alt="..." />
                                        </div>
                                    </div>
                                    <div className='col-6 col-sm-6'>
                                        <div className="card-body d-flex flex-column p-3" >
                                            <h4 className="card-title mt-4"> MOVIE : {movie.title.toUpperCase()}</h4>
                                            <div className='mt-4'>
                                                <h6 className="card-text ">YEAR :{movie.year}</h6>
                                                <h6 className="card-text  mt-4">DIRECTOR :{movie.director}</h6>
                                            </div>
                                            <div className='mt-3'>
                                                <h6 >GENRE :{movie.genre}</h6>
                                            </div>
                                            <div className='mt-3'>
                                                <h6 >RATINGS :{movie.rate}</h6>
                                            </div>
                                            <div className='d-flex flex-column m-5'>
                                                <button
                                                    className='btn btn-primary'
                                                    onClick={() => handFavourite(movie)}>add to library</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : <div className='row' style={{ height: "70vh", width: "100%" }}>
                        <div className='text-center mt-5'>
                            <h5 className='text-danger'>-- Movies Detail Not Found --</h5>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
