import React, { useState } from 'react';
import './AddToCart.css';
import useAuth from '../../Hooks/useAuth';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const AddToCart = () => {

    const { cart, quantity, submitInfo, contactForm } = useAuth();
    const location = useLocation();

    const total = cart.reduce((total, product) => product.price + total, 0);
    const tax = 5;
    const deliveryCharge = 10;
    const grandTotal = total + tax + deliveryCharge;

    return (
        <div className='container my-5'>

            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={submitInfo}>
                        <div>
                            <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Personal Information:</label>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput" name='name' required placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput2" name='phone' required placeholder="Phone" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Details:</label>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput2" name='region' required placeholder="Region" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput2" name='city' required placeholder="City" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput2" name='area' required placeholder="Area" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput2" name='address' required placeholder="Address" />
                            </div>
                        </div>
                        {!contactForm?.contactInfo?.phone ? (<input className='btn btn-primary' type="submit" value="Submit Information" />)
                            :
                            (<input disabled={true} className='btn btn-primary' type="submit" value="Submitted Successfully" />)}
                    </form>
                </div>

                <div className="col-md-4">

                </div>

                <div className="col-md-4">
                    <p>From <strong>{location.state?.from?.cityName}</strong></p>
                    <p>Arriving in {location.state?.from?.ArrivingTime} min</p>
                    <div>

                        {cart?.length > 0 &&
                            <div className="row p-2">
                                {cart.map(selectedProduct => <div key={selectedProduct.id} className="col-md-12 g-2 cart-summary">
                                    <div className="d-flex align-items-center justify-content-between px-3">
                                        <img style={{ width: '23%' }} src={selectedProduct?.img} className='img-fluid' alt="" />
                                        <div className='food-summary'>
                                            <p>{selectedProduct?.name}</p>
                                            <h6>{selectedProduct?.price}</h6>
                                            <p className="text-muted">Delivery Free</p>

                                        </div>
                                        <div className='d-flex px-2 cart-summary-quantity-btn'>
                                            <p>-</p>
                                            <p className='bg-white fw-normal'>{quantity}</p>
                                            <p>+</p>
                                        </div>
                                    </div>
                                </div>)}

                                <table className='my-3 cart-summary-table'>
                                    <tbody>
                                        <tr>
                                            <td>Sub Total:</td>
                                            <td className='text-end'>{total}</td>
                                        </tr>
                                        <tr>
                                            <td>Tax:</td>
                                            <td className='text-end'>{tax}</td>
                                        </tr>
                                        <tr>
                                            <td>Delivery Charge:</td>
                                            <td className='text-end'>{deliveryCharge}</td>
                                        </tr>
                                        <tr className='total-section'>
                                            <td><h6>Total:</h6></td>
                                            <td><h6 className='text-end total'>{grandTotal.toFixed(2)}</h6></td>
                                        </tr>
                                    </tbody>
                                </table>
                                {contactForm?.contactInfo?.phone ? <Link to='/place-order'>
                                    <button className='btn btn-primary w-100'>Place Order</button>
                                </Link> : ''}
                            </div>}

                    </div>
                </div>
            </div>

        </div >
    );
};

export default AddToCart;