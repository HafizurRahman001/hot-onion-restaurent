import React from 'react';
import './Login.css';
import loginLogo from '../../images/logo2.png'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn, signIn } = useAuth();
    return (
        <div className="container w-50">
            <div className=" mx-auto login-section">
                <div className="pt-5 text-center">
                    <img className="login-logo" src={loginLogo} alt="" />
                </div>
                <form className="w-50 mx-auto" onSubmit={signIn}>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder='Email' required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" required />
                        </div>
                    </div>
                    <button type="submit" className="btn signin-btn">Sign in</button>
                    <div className="automatic-signin text-center">
                        <i onClick={googleSignIn} className="fab automatic-signin-logo fa-google-plus-square"></i>
                        <i className="fab automatic-signin-logo fa-facebook-square"></i>
                        <i className="fab automatic-signin-logo fa-github-square"></i>
                    </div>
                    <p style={{ textAlign: 'center', marginLeft: '-63px' }} className="pt-0">
                        <Link className='text-decoration-none' to='/signup'>Are you a new user?</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;