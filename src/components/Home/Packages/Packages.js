import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from './Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://serene-hamlet-40607.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div id="packages" className="mt-5">
            <h1 style={{fontWeight: '700', fontSize: '40px'}} className="text-center">OUR PACKAGES</h1>
            <div className=" container package-container mt-5 mb-5 App">
                {
                    packages.map(pk => <Package
                        key={pk.id}
                        pk={pk}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;