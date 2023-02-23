import React from 'react';
import { Link } from 'react-router-dom';
import HashImg from '../../assets/pngegg.png';

export default function NavBar() {

    return (
        <div className="nav-bg">
            <div className="container-fluid">
                <div className="row p-2 pt-3 pb-3 d-flex align-items-center justify-content-between">
                    <div className=" col-sm-3 col-md-4 col-4 d-flex align-items-center">
                        <img src={HashImg} alt='' style={{ height: "30%", width: "8rem" }} />
                        <h3 className='mx-3 main-head'>MOVIES WORLD</h3>
                    </div>
                    <div className='col-md-4 col-sm-3 ' ></div>
                    <div className="col-md-4 col-sm-6 col-8 text-center">
                        <div>
                            <Link to='/' className='link-style mx-4'>Home</Link>
                            <Link to='/movies/library' className='link-style'>Library</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
