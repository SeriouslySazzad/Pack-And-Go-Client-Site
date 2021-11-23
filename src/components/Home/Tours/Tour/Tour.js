import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = (props) => {
    const { name, img, desc, price } = props.tour;
    return (
        <div className="single-tour">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p className="mt-2">{desc}</p>
            <h5>Price : <span className="text-secondary">${price}</span></h5>
            <Link to='/login'>
                <button className="btn btn-primary mt-3">Read More <i className="fas fa-arrow-alt-circle-right"></i></button>
            </Link>
        </div>
    );
};

export default Tour;