import React from 'react';
import './Footer.css'
import footerLogo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className="bg-dark py-2 mt-4">
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 py-3">
                        <div className="footer-logo">
                            <img src={footerLogo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 food-details py-3">
                        <p><a href="/">About Online Food</a></p>
                        <p><a href="/">Read Our Blog</a></p>
                        <p><a href="/">Sign up to Deliver</a></p>
                        <p><a href="/">Add Your Restaurant</a></p>
                    </div>
                    <div className="col-md-3 faq py-3">
                        <p><a href="/">Get Helps</a></p>
                        <p><a href="/">Read All FAQs</a></p>
                        <p><a href="/">View All Cities</a></p>
                        <p><a href="/">Restaurant Near Me</a></p>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-6">
                        <p style={{ color: 'gray', textAlign: 'left' }}>&copy; copyright: All right reserved by Md Hafizur Rahman</p>
                    </div>
                    <div className="col-md-2">
                        <p className='text-white'>Privacy Policy</p>
                    </div>
                    <div className="col-md-2">
                        <p className='text-white'>Terms of Uses</p>
                    </div>
                    <div className="col-md-2">
                        <p className='text-white'>Pricing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;