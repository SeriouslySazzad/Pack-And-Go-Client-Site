import React from 'react';
import { Link } from 'react-router-dom';
import './Adventure.css';
import adv1 from './images/1.png';
import adv2 from './images/2.png';
import adv3 from './images/3.png';
import adv4 from './images/4.png';
import adv5 from './images/5.png';
import adv6 from './images/6.png';

const Adventure = () => {
    return (
        <div className="adventure">
            <div className="App">
                <h1>ADVENTURE &amp; ACTIVITY</h1>
                <blockquote className="mb-5">This one is among the oldest quotes in existence. It’s not surprising since it’s wisdom is eternal.
                    The Chinese motivational proverb <br />teaches us that no matter how tough or impossible something is, if we took the initiative, if we take that first step, the rest of the venture falls into place.</blockquote>
            </div>
            <div className="adventure-contaner container">
                <div className="single-adventure">
                    <img src={adv1} alt="" />
                    <h4>Adventure</h4>
                    <p>15 Destination</p>
                    <button className="btn btn-secondary btn-small">Details</button>
                </div>
                <div className="single-adventure">
                    <img src={adv2} alt="" />
                    <h4>Trekking</h4>
                    <p>12 Destination</p>
                    <button className="btn btn-secondary btn-small">Details</button>
                </div>
                <div className="single-adventure">
                    <img src={adv3} alt="" />
                    <h4>Camp Fire</h4>
                    <p>7 Destination</p>
                    <button className="btn btn-secondary btn-small">Details</button>
                </div>
                <div className="single-adventure">
                    <img src={adv4} alt="" />
                    <h4>Off Road</h4>
                    <p>15 Destination</p>
                    <button className="btn btn-secondary btn-small">Details</button>
                </div>
                <div className="single-adventure">
                    <img src={adv5} alt="" />
                    <h4>Camping</h4>
                    <p>13 Destination</p>
                    <button className="btn btn-secondary btn-small">Details</button>
                </div>
                <div className="single-adventure">
                    <img src={adv6} alt="" />
                    <h4>Exploring</h4>
                    <p>25 Destination</p>
                    <button className="btn btn-secondary btn-small">Details</button>
                </div>
            </div>
            <div className="holiday-special">
                <div className=" container mt-5 App p-5">
                    <h1 className="text-white mt-5">SPECIAL VACATION 25% OFF!</h1>
                    <h3 className="text-warning">Sign up now to recieve hot special offers <br /> and information about the best tour packages, updates and discounts !!</h3>
                    <input type="text" className="form-control mt-3" id="formGroupExampleInput" placeholder="Write Your E-mail Address" />
                    <Link to='/login'>
                        <button type="button" className="btn btn-danger mt-3 mb-3"><i className="fas fa-user-plus"></i> SIGN UP NOW!</button>
                    </Link>
                    <h3>“Man cannot discover new oceans unless he has the courage to lose sight of the shore. We take photos as a return ticket to a moment otherwise gone.”</h3>
                </div>
            </div>
        </div>
    );
};

export default Adventure;