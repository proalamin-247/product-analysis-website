import React from 'react';
import notFoundImg from '../Media/img/NotFound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <img src={notFoundImg} alt="" />
            {/* <h1>Not found</h1> */}
        </div>
    );
};

export default NotFound;