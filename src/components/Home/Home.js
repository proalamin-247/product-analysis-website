import React from 'react';
import './Home.css'
import shoe from '../Media/img/shoe.webp'

const Home = () => {
    return (
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
    );
};

export default Home;