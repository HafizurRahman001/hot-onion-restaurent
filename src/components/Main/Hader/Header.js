import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
    const { user, logOut, cart } = useAuth();
    return (
        <div className='container'>
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2">
                    <Link to='/'>
                        <div className="header-logo">
                            <img style={{ width: '150px', textAlign: 'left' }} src={logo} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="col-md-10 py-2 menu-section">
                    <span>
                        <i style={{ fontSize: '22px' }} className="fas fa-cart-plus"></i>
                        <sup className='fs-5 fw-bold'> {cart.length}</sup>
                    </span>
                    <Link style={{ margin: '0px 10px' }} to='/login'>Login</Link>
                    {!user?.email ? <button className="signup-btn">
                        <Link to='/signup'>Sign up</Link>
                    </button> : <button className="signup-btn">
                        <Link onClick={logOut} to='/signup'>Sign Out</Link></button>}

                    {/* profile dropdown  */}
                    {user?.email && <Dropdown className='dropdown-profile'>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            <img className="user-img" src={user?.photoURL} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Your Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Points</Dropdown.Item>
                            <Dropdown.Item onClick={logOut}>LogOut</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                </div>
            </div>
        </div>
    );
};

export default Header;