import React from 'react';
import Header from '../Header/Header';
import Featured from './Featured';
import FeaturedProperty from './FeaturedProperty';
import MailList from './MailList';
import PropertyList from './PropertyList';
import TouristAttractions from './TouristAttractions';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <div className='mx-0 md:mx-10'>
                <Featured></Featured>
                {/* <TouristAttractions></TouristAttractions> */}
                <h1 className='text-2xl md:text-4xl text-center md:text-left font-bold ml-4 py-4 my-4'>Browse property by type</h1>
                <PropertyList></PropertyList>
                <h1 className='text-2xl md:text-4xl text-center md:text-left font-bold ml-4 py-4 my-4'>Top guest picks</h1>
                <FeaturedProperty></FeaturedProperty>
            </div>
            <MailList></MailList>
        </div>
    );
};

export default Home;