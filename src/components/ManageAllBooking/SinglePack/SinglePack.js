import React from 'react';
import { Link } from 'react-router-dom';

const SinglePack = (props) => {
    const { name, img, price, desc } = props.pck;
    return (
        <div className="single-package bg-light">
            <img className="mb-4" src={img} alt="" />
            <h3 className="text-uppercase">{name}</h3>
            <p>{desc}</p>
            <h4>Price : <span className="text-danger">${price}</span></h4>
            {/* <Link to="/home">
                <button className="btn btn-success me-2">Book {name} <i className="fas fa-arrow-alt-circle-right" /> <i className="fas fa-arrow-alt-circle-right"></i></button>
            </Link> */}
            <button className="btn btn-danger me-2">Delete</button>
            <button className="btn btn-warning me-2">Update</button>
        </div>
    );
};

export default SinglePack;