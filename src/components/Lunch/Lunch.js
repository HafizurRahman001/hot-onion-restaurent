import React from 'react';
import { Link } from 'react-router-dom';

const Lunch = (props) => {
    const { img, name, id, desc, price } = props.singleFood;
    return (
        <div className="col-md-3">
            <div className="card food-cart px-5" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top pt-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p style={{ wordBreak: 'break-all' }} className="card-text">{desc.slice(0, 66)}</p>
                    <p style={{ color: 'crimson' }}><i className="fas fa-dollar-sign"></i> Price: {price}</p>
                    <Link to={`/checkout/${id}`}>
                        <button className='btn btn-primary'>Check Out Food</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Lunch;