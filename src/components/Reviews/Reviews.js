import React, { useState } from 'react';
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);

    return (
        <div className='reviews-container'>
            <h1 className='reviews-title'>Top Reviews</h1>
            <div className='all-reviews'>
                {
                    reviews.map(review =>
                        <Review
                            key={review.id}
                            review={review}
                        ></Review>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;