import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './TabsAndNavs.css'

const TabsAndNavs = () => {
    const [toggleState, setToggleState] = useState(1);
    const { food } = useAuth();
    console.log('foods:', food);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <h2 className='text-center py-5 text-primary'>Filter Your Foods</h2>
            <div className="container my-4 filter-section">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs fw-bold fs-5" : "tabs fs-5"}
                        onClick={() => toggleTab(1)}
                    >
                        Break Fast
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs fw-bold fs-5" : "tabs fs-5"}
                        onClick={() => toggleTab(2)}
                    >
                        Lunch
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs fw-bold fs-5" : "tabs fs-5"}
                        onClick={() => toggleTab(3)}
                    >
                        Dinner
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h3 className='py-3 text-muted'>Chose your Favourite Break Fast {food?.name} </h3>
                        <hr />
                        <div className="row g-5">
                            {food.slice(0, 6).map(singleFood => <BreakFast
                                singleFood={singleFood}
                                key={singleFood.id}
                            ></BreakFast>)}
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h3 className='py-3 text-muted'>Chose your Favourite Lunch</h3>
                        <hr />
                        <div className="row g-5">
                            {food.slice(6, 12).map(singleFood => <Lunch
                                singleFood={singleFood}
                                key={singleFood.id}
                            ></Lunch>)}
                        </div>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h3 className='py-3 text-muted'>Chose your Favourite Dinner</h3>
                        <hr />
                        <div className="row g-5">
                            {food.slice(12, 18).map(singleFood => <Dinner
                                singleFood={singleFood}
                                key={singleFood.id}
                            ></Dinner>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabsAndNavs;