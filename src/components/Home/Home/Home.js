import React, { useState, useEffect } from 'react';
import Adventure from '../Adventure/Adventure';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Packages from '../Packages/Packages';
import Tours from '../Tours/Tours';
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className="App mt-5">
                        <Spinner animation="grow" />
                    </div>
                    :
                    <div className="">
                        <Banner></Banner>
                        <Packages></Packages>
                        <Adventure></Adventure>
                        <Tours></Tours>
                        <Footer></Footer>
                    </div>
            }



        </div >
    );
};

export default Home;