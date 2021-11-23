import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleResetPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div className="login-container">
            <div className="container">
                <br />
                <div className="App">
                    <button onClick={handleGoogleLogin} className="btn btn-danger me-4"><i className="fab fa-google"></i> Sign In With Google Account</button>
                </div>
                <hr />
                <hr />
                <form onSubmit={handleRegistration}>
                    <h2 className="mt-3 text-center">Please {isLogin ? 'Login' : 'Register'} with Email and Password</h2>
                    <br />
                    {!isLogin &&
                        <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label"><i class="fas fa-user"></i> Your Name</label>
                            <div className="col-sm-10">
                                <input onBlur={handleNameChange} type="name" className="form-control bg-secondary text-white" id="inputName" placeholder="Enter Your Name" required />
                            </div>
                        </div>
                    }
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"><i class="far fa-envelope"></i> Your Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control bg-secondary text-white" id="inputEmail3" placeholder="Enter Your Email" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><i class="fas fa-key"></i> Your Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control bg-secondary text-white" id="inputPassword3" placeholder="Enter Your Password" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Do you already have an account?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-info">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    <button onClick={handleResetPassword} type="button" className="btn btn-dark ms-3">Reset Your Password</button>
                </form>
                <br />
            </div>

        </div>
    );
};

export default Login;