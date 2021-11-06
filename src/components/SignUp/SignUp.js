import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginLogo from '../../images/logo2.png';

const SignUp = () => {
    const { googleSignIn, signIn } = useAuth();
    return (
        <div className="w-25 mx-auto">
            <div className="py-5s">
                <img className="login-logo" src={loginLogo} alt="" />
            </div>
            <form onSubmit={signIn}>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder='Name' required />
                    </div>
                </div>
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
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" required />
                    </div>
                </div>
                <button type="submit" className="btn signin-btn">Sign in</button>
                <div className="automatic-signin">
                    <i onClick={googleSignIn} className="fab automatic-signin-logo fa-google-plus-square"></i>
                    <i className="fab automatic-signin-logo fa-facebook-square"></i>
                    <i className="fab automatic-signin-logo fa-github-square"></i>
                </div>
                <p style={{ marginLeft: '-44px' }} className="pt-0">
                    <Link className='text-decoration-none' to='/login'>Already Have an Account?</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;