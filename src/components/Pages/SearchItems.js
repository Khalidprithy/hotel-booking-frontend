import React from 'react';

const SearchItems = () => {
    return (
        <div className='m-2'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-1 border border-info rounded-md'>
                <img className='p-1 rounded-md' src="https://thumbs.dreamstime.com/b/hotel-room-13225019.jpg" alt="" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-semibold'>Studio Apartment</h1>
                    <span className='text-xs font-semibold'>500m from center</span>
                    <span className='text-xs bg-success text-white px-1 rounded-sm w-fit'>Free airport taxi</span>
                    <span className='text-xs font-bold'>1 Bed, 1 Bath, Kitchen Dinning</span>
                    <span className='text-xs font-semibold text-success'>Free cancellation</span>
                    <span className='text-xs text-success'>You can cancel later, Book now</span>
                </div>
                <div className='flex flex-col justify-between m-1'>
                    <div className='flex items-center justify-between'>
                        <span className='font-semibold'>Excellent</span>
                        <button className='btn btn-xs btn-success'>8.9</button>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='text-right font-bold'>$123</span>
                        <span className='text-xs text-right'>Includes taxes and fees</span>
                        <button className='btn btn-xs btn-success btn-outline rounded-sm'>Availability</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItems;