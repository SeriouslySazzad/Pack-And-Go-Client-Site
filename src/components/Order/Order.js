import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';

const Order = () => {
    const { user } = useAuth();
    return (
        <div className="bg-secondary">
            <div className="App p-5">
                <h3 className="text-white">Your Name : {user?.displayName}</h3>
                <h3 className="text-white">Your Email : {user?.email}</h3>
                <hr />
                <hr />
                <h4 className="text-warning">Here is your package down below :</h4>
                <img alt="" className="w-25" />
                <h4 className="text-white">Package Name : </h4>
                <h4 className="text-white">Price : </h4>
                <button className="btn-danger me-2">Delete</button>
                <button className="btn-warning">Update</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Order;