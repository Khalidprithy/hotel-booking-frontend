import React from 'react';
import tinyapart from '../../img/TopPicks/Tinyapartment.jpg'
import redison from '../../img/TopPicks/redisonblue.jpg'
import treahouse from '../../img/TopPicks/treehouse.jpg'
import aframe from '../../img/TopPicks/aframe.jpg'

const FeaturedProperty = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mx-4'>
            <div>
                <img className='rounded-lg' src={tinyapart} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>Tiny Apartment</h1>
                    <h4>Dhaka</h4>
                    <p className='font-semibold'>Starting from $10</p>
                    <p><span className='btn btn-xs rounded-sm'>8.9</span> Very Good</p>
                </div>
            </div>
            <div>
                <img className='rounded-lg' src={redison} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>Radisson Blue</h1>
                    <h4>Dhaka</h4>
                    <p className='font-semibold'>Starting from $50</p>
                    <p><span className='btn btn-xs rounded-sm'>7.9</span> Good</p>
                </div>
            </div>
            <div>
                <img className='rounded-lg' src={treahouse} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>Tree House</h1>
                    <h4>Rangamati</h4>
                    <p className='font-semibold'>Starting from $24</p>
                    <p><span className='btn btn-xs rounded-sm'>8.9</span> Very Good</p>
                </div>
            </div>
            <div>
                <img className='rounded-lg' src={aframe} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>A frame house</h1>
                    <h4>Tetulia</h4>
                    <p className='font-semibold'>Starting from $35</p>
                    <p><span className='btn btn-xs rounded-sm'>8.9</span> Very Good</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperty;