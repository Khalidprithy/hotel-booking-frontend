import React from 'react';
import dhaka from '../../img/dhaka.jpg'
import cox from '../../img/cox.jpg'
import sylhet from '../../img/sylhet.jpeg'
import useFetch from '../../hooks/useFetch';

const Featured = () => {

    const { data, loading, error } = useFetch("http://localhost:5000/hotels/countByCity?cities=Dhaka,Rangpur,Cox%27s%20Bazar")
    return (
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-2 mx-4 z-10'>
            {loading ? ("Please Wait") : <>

                <div className='relative'>
                    <img className='w-72 object-fill rounded-lg' src={dhaka} alt="" />
                    <div className='absolute bottom-5 left-5 text-white'>
                        <h1 className='text-2xl font-semibold'>Dhaka</h1>
                        <h2>{data[0]} Properties</h2>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-72 object-fill rounded-lg' src={cox} alt="" />
                    <div className='absolute bottom-5 left-5 text-white'>
                        <h1 className='text-2xl font-semibold'>Cox's Bazar</h1>
                        <h2>{data[1]} Properties</h2>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-72 object-fill rounded-lg' src={sylhet} alt="" />
                    <div className='absolute bottom-5 left-5 text-white'>
                        <h1 className='text-2xl font-semibold'>Sylhet</h1>
                        <h2>{data[2]} Properties</h2>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default Featured;