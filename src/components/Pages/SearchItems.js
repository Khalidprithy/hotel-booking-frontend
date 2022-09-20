import React from 'react';
import { Link } from 'react-router-dom';

const SearchItems = ({ item }) => {
    return (
        <div className='m-2'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border border-info rounded-md mb-4'>
                <img className='p-1 rounded-md' src="https://media.cntraveler.com/photos/53dae9a4dcd5888e145d57ac/16:9/w_2560,c_limit/louis-hotel-munich-germany-111471-1.jpg" alt="" />
                <div className='flex flex-col gap-1 p-2'>
                    <h1 className='text-3xl font-semibold'>{item.name}</h1>
                    <span className='font-semibold'>{item.distance}m from center</span>
                    <span className='bg-success text-white px-1 rounded-sm w-fit'>Free airport taxi</span>
                    <span className='font-bold'>{item.description}</span>
                    <span className='text-xs md:text-xl font-semibold text-success'>Free cancellation</span>
                    <span className='text-xs md:text-xl text-success'>You can cancel later, Book now</span>
                </div>
                <div className='flex flex-col justify-between items-end m-4'>
                    {
                        !item.rating && <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    }
                    {item.rating && <div className='flex items-center justify-between'>
                        <span className='font-semibold'>Excellent</span>
                        <button className='btn btn-xs btn-success'>{item.rating}</button>
                    </div>}
                    <div className='flex flex-col gap-1'>
                        <span className='text-right text-xl md:text-3xl font-bold'>${item.cheapestPrice}</span>
                        <span className='text-sm md:text-xl text-right'>Includes taxes and fees</span>
                        <Link to={`/hotels/${item._id}`} className='btn btn-sm md:btn-md btn-success btn-outline rounded'>Availability</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItems;