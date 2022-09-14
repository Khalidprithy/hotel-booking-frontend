import React from 'react';
import Header from '../Header/Header';
import Featured from './Featured';
import FeaturedProperty from './FeaturedProperty';
import MailList from './MailList';
import PropertyList from './PropertyList';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Featured></Featured>
            <h1 className='text-xl font-semibold ml-4 py-4'>Browse property by type</h1>
            <PropertyList></PropertyList>
            <h1 className='text-xl font-semibold ml-4 py-4'>Top guest picks</h1>
            <FeaturedProperty></FeaturedProperty>
            <MailList></MailList>
        </div>
    );
};

export default Home;