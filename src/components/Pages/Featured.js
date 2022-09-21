import React from 'react';
import dhaka from '../../img/dhaka.jpg'
import cox from '../../img/cox.jpg'
import sylhet from '../../img/sylhet1.jpeg'
import useFetch from '../../hooks/useFetch';

const Featured = () => {

    const { data, loading, error } = useFetch("https://hotel-booking-server.onrender.com/hotels/countByCity?cities=Dhaka,Rangpur,Cox%27s%20Bazar")
    return (
        <div className='mt-40 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mx-4 z-10'>
            {loading ? ("Please Wait") : <>

                <div className='relative mx-auto'>
                    <img className='w-72 md:w-full object-fill rounded-lg hover:scale-105 duration-300 ease-in-out' src={dhaka} alt="" />
                    <div className='absolute bottom-5 left-5 text-white'>
                        <h1 className='text-2xl md:text-6xl font-semibold'>Dhaka</h1>
                        <h2 className='text-xl md:text-2xl'>{data[0]} Properties</h2>
                    </div>
                </div>
                <div className='relative mx-auto'>
                    <img className='w-72 md:w-full object-fill rounded-lg hover:scale-105 duration-300 ease-in-out' src={cox} alt="" />
                    <div className='absolute bottom-5 left-5 text-white'>
                        <h1 className='text-2xl md:text-6xl font-semibold'>Cox's Bazar</h1>
                        <h2 className='text-xl md:text-2xl'>{data[1]} Properties</h2>
                    </div>
                </div>
                <div className='relative mx-auto'>
                    <img className='w-72 md:w-full object-fill rounded-lg hover:scale-105 duration-300 ease-in-out' src={sylhet} alt="" />
                    <div className='absolute bottom-5 left-5 text-white'>
                        <h1 className='text-2xl md:text-6xl font-semibold'>Sylhet</h1>
                        <h2 className='text-xl md:text-2xl'>{data[2]} Properties</h2>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default Featured;