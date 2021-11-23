import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const { _id, name, img, price, desc } = props.pk;
    return (
        <div className="single-package">
            <img className="mb-4" src={img} alt="" />
            <h3 className="text-uppercase">{name}</h3>
            <p>{desc}</p>
            <h4>Price : <span className="text-danger">${price}</span></h4>
            <Link to={`/user-order/${_id}`}>
                <button className="btn btn-success">Book {name} <i className="fas fa-arrow-alt-circle-right" /> <i className="fas fa-arrow-alt-circle-right"></i></button>
            </Link>
        </div>
    );
};

export default Package;