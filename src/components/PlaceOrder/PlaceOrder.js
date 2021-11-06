import React from 'react';
import locationImg from '../../images/location.jpg';
import deliveryStatus from '../../images/delivery status.png';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { contactForm } = useAuth();
    return (
        <>
            <h1 className="text-center text-danger mt-5 mb-3">
                Delivery Information
            </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <table class="table table-striped border">
                            <tbody>
                                <tr className="table-secondary">
                                    <td>Name:</td>
                                    <td>{contactForm?.contactInfo?.name}</td>
                                    <td>Phone:</td>
                                    <td>{contactForm?.contactInfo?.phone}</td>
                                </tr>
                                <tr className='table-light'>
                                    <td>Region:</td>
                                    <td>{contactForm?.contactInfo?.region}</td>
                                    <td>City:</td>
                                    <td>{contactForm?.contactInfo?.city}</td>
                                </tr>
                                <tr className='table-secondary'>
                                    <td>Area:</td>
                                    <td>{contactForm?.contactInfo?.area}</td>
                                    <td>Address:</td>
                                    <td>{contactForm?.contactInfo?.address.slice(0, 19)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=''>
                    <div className="row g-4">
                        <div className="col-md-8">
                            <img style={{ borderRadius: '15px' }} className="img-fluid" src={locationImg} alt="" />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <img style={{ borderRadius: '10px' }} className="img-fluid" src={deliveryStatus} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;