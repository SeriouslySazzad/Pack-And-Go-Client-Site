import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tour from './Tour/Tour';
import './Tours.css';

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://serene-hamlet-40607.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div className="mt-5 mb-5">
            <h1 style={{fontWeight: '700', fontSize: '40px'}} className="text-center mb-5">SPECIAL TOURS &amp; TRAVELLS</h1>
            <div className="tours-container container">
                {
                    tours.map(tour => <Tour
                        key={tour.id}
                        tour={tour}
                    ></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;