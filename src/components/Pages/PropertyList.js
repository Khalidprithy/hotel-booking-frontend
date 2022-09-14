import React from 'react';
import hotel from '../../img/hotel.jpg'
import cabin from '../../img/cabin.jpg'
import resort from '../../img/resort.jpg'
import camp from '../../img/camping.jpg'
import apartment from '../../img/apartment.jpg'

const PropertyList = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2 mx-4'>
            <div className=' flex flex-col'>
                <img className='w-72 rounded-md' src={apartment} alt="" />
                <div className='text-black'>
                    <h4 className='text-2xl'>Apartments</h4>
                    <p>1500+</p>
                </div>
            </div>
            <div className=' flex flex-col'>
                <img className='w-72 rounded-md' src={hotel} alt="" />
                <div className='text-black'>
                    <h4 className='text-2xl'>Hotels</h4>
                    <p>1200+</p>
                </div>
            </div>
            <div className=' flex flex-col'>
                <img className='w-72 rounded-md' src={resort} alt="" />
                <div className='text-black'>
                    <h4 className='text-2xl'>Resorts</h4>
                    <p>200+</p>
                </div>
            </div>
            <div className=' flex flex-col'>
                <img className='w-72 rounded-md' src={cabin} alt="" />
                <div className='text-black'>
                    <h4 className='text-2xl'>Cabins</h4>
                    <p>50+</p>
                </div>
            </div>
            <div className=' flex flex-col'>
                <img className='w-72 rounded-md' src={camp} alt="" />
                <div className='text-black'>
                    <h4 className='text-2xl'>Camping</h4>
                    <p>154+</p>
                </div>
            </div>

        </div>
    );
};

export default PropertyList;