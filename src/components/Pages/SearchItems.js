import React from 'react';
import { Link } from 'react-router-dom';

const SearchItems = ({ item }) => {
    return (
        <div className='m-2'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-1 border border-info rounded-md'>
                <img className='p-1 rounded-md' src="https://thumbs.dreamstime.com/b/hotel-room-13225019.jpg" alt="" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-semibold'>{item.name}</h1>
                    <span className='text-xs font-semibold'>{item.distance}m from center</span>
                    <span className='text-xs bg-success text-white px-1 rounded-sm w-fit'>Free airport taxi</span>
                    <span className='text-xs font-bold'>{item.description}</span>
                    <span className='text-xs font-semibold text-success'>Free cancellation</span>
                    <span className='text-xs text-success'>You can cancel later, Book now</span>
                </div>
                <div className='flex flex-col justify-between m-1'>

                    {item.rating && <div className='flex items-center justify-between'>
                        <span className='font-semibold'>Excellent</span>
                        <button className='btn btn-xs btn-success'>{item.rating}</button>
                    </div>}
                    <div className='flex flex-col gap-1'>
                        <span className='text-right font-bold'>${item.cheapestPrice}</span>
                        <span className='text-xs text-right'>Includes taxes and fees</span>
                        <Link to={`/hotels/${item._id}`} className='btn btn-xs btn-success btn-outline rounded-sm'>Availability</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItems;