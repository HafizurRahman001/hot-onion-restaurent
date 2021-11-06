import React from 'react';
import waiter1 from '../../images/Image/adult-blur-blurred-background-687824.png'
import waiter2 from '../../images/Image/chef-cook-food-33614.png';
import waiter3 from '../../images/Image/architecture-building-city-2047397.png';
import icon1 from '../../images/ICON/Group 204.png';
import icon2 from '../../images/ICON/Group 1133.png';
import icon3 from '../../images/ICON/Group 245.png';

const Priority = () => {
    return (
        <div className="container">
            <div className="w-50 mx-auto text-start my-5">
                <h1 style={{ fontSize: '45px', textAlign: 'center' }}>Why You Choose Us??</h1>
                <p style={{ textAlign: 'justify' }}>
                    Beyond the basic purpose of restaurants to provide food and drink, restaurants have, historically, fulfilled a human need for connection and shaped social relations. In 21st century American life restaurants occupy an increasingly important place in shaping our overall economy and the nature and makeup of our cities.
                </p>
            </div>
            <div>
                <div className="row g-3">
                    <div className="col-md-4">
                        <div>
                            <img className="img-fluid" src={waiter1} alt="" />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <div>
                                        <img style={{ float: 'right' }} src={icon1} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <h4>Fast Delivery</h4>
                                    <p>
                                        Keep your systems in sync  with automated web hook based notifications each time link is paid and how we dream about our future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img className="img-fluid" src={waiter2} alt="" />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <div>
                                        <img style={{ float: 'right' }} src={icon2} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <h4>A Good Auto Responder</h4>
                                    <p>
                                        Keep your systems in sync  with automated web hook based notifications each time link is paid and how we dream about our future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img className="img-fluid" src={waiter3} alt="" />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <div>
                                        <img style={{ float: 'right' }} src={icon3} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <h4>Home Delivery</h4>
                                    <p>
                                        Keep your systems in sync  with automated web hook based notifications each time link is paid and how we dream about our future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Priority;