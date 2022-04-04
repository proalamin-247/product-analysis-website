import React from 'react';
import './Home.css'
import shoe from '../Media/img/shoe.webp'
import Reviews from '../Reviews/Reviews';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';


const Home = () => {
    const navigation = useNavigate();
    const [reviews, setReviews] = useReviews([]);

    return (
        <>
            <div className="home-container">
                <div className="half-width details">
                    <h1> BEST FOOTBALL BOOTS FOR 2022</h1>
                    <p>When razor-sharp instincts flow into lightning pace, the pitch becomes your playground. Find your soccer groove in adidas X. These cleats support speed of thought and rapid feet. The Carbitex carbon-fiber insert and raised forefoot help spark explosive acceleration, and an Agilitycage straps you in for jinks and turns. The adidas PRIMEKNIT skin adds comfort and confidence.</p>
                    <div className="button">
                        <a href="https://www.adidas.com/us/x-speedflow.1-firm-ground-cleats/GW7454.html?forceSelSize=M%204%20%2F%20W%205" target="_blank">Preebook Now<i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="half-width">
                    <img src={shoe} alt="" />
                </div>
            </div>
            <div>
                <div className='reviews-container'>
                    <h1 className='reviews-title'>Top Reviews (3)</h1>
                    <div className='all-reviews'>
                        {
                            reviews.slice(0, 3).map(review =>
                                <Review
                                    key={review.id}
                                    review={review}
                                ></Review>
                            )
                        }
                    </div>
                </div>
                <div className='all-reviws-btn-area'>
                    <button className="all-reviews-btn" onClick={() => navigation('/reviews')}>See all reviews</button>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;