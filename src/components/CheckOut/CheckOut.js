import React from 'react';
import './CheckOut.css';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const { foodId } = useParams();
    const { food, quantity, addToCart, incrementQuantity, decrementQuantity } = useAuth();
    const result = food.filter(rs => rs.id === parseInt(foodId));

    return (
        <div className='checkout-section' >
            <div className='container'>
                <div className='py-5'>
                    <div className="row align-items-center">
                        <div className="col-md-6 py-2">
                            <h1>{result[0]?.name}</h1>
                            <p className="w-75 text-muted">{result[0]?.desc}</p>
                            <div className='d-flex'>
                                <h2>${result[0]?.price}</h2>
                                <div className="quantity-section d-flex mx-5 align-items-center border border-1">
                                    <h3 onClick={decrementQuantity} className='ps-3 decrement'>-</h3>
                                    <h4 className='px-3'>{quantity}</h4>
                                    <h3 onClick={incrementQuantity} className='pe-3 increment'>+</h3>
                                </div>
                            </div>
                            <div className="add-to-cart-btn-section py-4">
                                <Link
                                    to={{
                                        pathname: '/add-to-cart',
                                        state: { from: result[0] }
                                    }}
                                >
                                    <button onClick={() => addToCart(result[0])} className='btn add-to-cart-btn px-4 py-2'>
                                        <i className="fas pe-2 fa-cart-plus"></i> Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img style={{ maxWidth: '75%' }} className="img-fluid" src={result[0]?.img} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <img src={food[0]?.img} className="img-fluid w-75" alt="" />
                            </div>
                            <div>
                                <img src={food[1]?.img} className="img-fluid w-75" alt="" />
                            </div>
                            <div>
                                <i className="fas ps-3 fs-1 fa-chevron-right"></i>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default CheckOut;