import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import SinglePack from './SinglePack/SinglePack';

const ManageAllBooking = () => {
    const [packages, setPackages] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://serene-hamlet-40607.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className="App bg-secondary">
            <br />
            <h1>USER INFORMATION</h1>
            <h4 className="text-white">User Name : {user?.displayName}</h4>
            <h4 className="text-white">User Email : {user?.email}</h4>
            <br />

            <div className="package-container container">
                {
                    packages.map(pck => <SinglePack
                        key={pck.id}
                        pck={pck}
                    ></SinglePack>)
                }
                
            </div>
            <br />
            <br />

            <Footer></Footer>
        </div>
    );
};

export default ManageAllBooking;