import React from 'react';
import Banner from '../../Banner/Banner';
import Priority from '../../Priority/Priority';
import TabsAndNavs from '../../Tabs/TabsAndNavs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabsAndNavs></TabsAndNavs>
            <Priority></Priority>
        </div>
    );
};

export default Home;