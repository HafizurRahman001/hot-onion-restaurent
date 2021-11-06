import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner-section">
                <div>
                    <h1 className="banner-heading">Best Food Waiting for Your Belly</h1>
                    <div className="d-flex search-section mt-4">
                        <input className="form-control search-input me-2" type="search" placeholder="Search food items" aria-label="Search" />
                        <button className="btn search-btn text-white " type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;