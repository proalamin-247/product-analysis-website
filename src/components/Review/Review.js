import React from 'react';
import './Review.css'
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';


const Review = ({review}) => {
    const {name,img, comment, ratting}= review;
    return (
            <div className='card-container' >
                <div className='qoute-icon'><FaQuoteLeft /></div>
                <p className='comment'> {comment}</p>
                <div className='qoute-icon'><FaQuoteRight /></div>

                <div className='author-info'>
                    <img src={img} alt="" />
                    <p className='author-name'>{name}</p>
                <p ><small>Ratting: <span className='ratting'>{ratting}</span></small></p>
                </div>
            </div>
    );
};

export default Review;