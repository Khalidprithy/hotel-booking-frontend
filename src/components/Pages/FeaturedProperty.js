import React from 'react';
import tinyapart from '../../img/TopPicks/Tinyapartment.jpg'
import redison from '../../img/TopPicks/redisonblue.jpg'
import treahouse from '../../img/TopPicks/treehouse.jpg'
import aframe from '../../img/TopPicks/aframe.jpg'
import useFetch from '../../hooks/useFetch';

const FeaturedProperty = () => {

    const { data, loading, error } = useFetch("https://hotel-booking-server.onrender.com/hotels?features=true&limit=4")

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mx-4 pb-4'>
            {loading ? "loading" :
                <>
                    {
                        data.map(item =>
                            <div className='mx-auto border p-2 rounded-md shadow-sm hover:shadow-2xl' key={item._id}>
                                <img className='rounded-lg' src={item.photos} alt="" />
                                <div className='flex flex-col'>
                                    <h1 className='text-2xl font-semibold'>{item.name}</h1>
                                    <h4 className='text-xl'>{item.city}</h4>
                                    <p className='font-semibold'>Starting from $ <span className='text-xl font-bold text-success'>{item.cheapestPrice}</span></p>
                                    {item.rating && <p><span className='btn btn-xs rounded-sm'>{item.rating}</span> Very Good</p>}
                                </div>
                            </div>
                        )
                    }
                </>}
        </div>
    );
};

export default FeaturedProperty;