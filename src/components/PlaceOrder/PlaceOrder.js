import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import thumsUp from '../../images/po.jpg';

const PlaceOrder = () => {
    return (
        <div className="">
            <div className="bg-secondary App">
            <div className="container p-5">
                <img className="mt-5 rounded-2" src={thumsUp} alt="" />
                <h4 className="text-uppercase mt-5 text-warning mt-2">Your Package Placed Successfully. <br /> Thank You for book this package.</h4>
                <Link to="/home">
                    <button className="btn btn-primary">Go to Homepage</button>
                </Link>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;