import React from 'react';
import hotel from '../../img/hotel.jpg'
import cabin from '../../img/cabin.jpg'
import resort from '../../img/resort.jpg'
import camp from '../../img/camping.jpg'
import apartment from '../../img/apartment.jpg'
import useFetch from '../../hooks/useFetch';

const PropertyList = () => {

    const { data, loading, error } = useFetch("http://localhost:5000/hotels/countByType")

    const images = [hotel, cabin, resort, camp, apartment]


    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2 mx-4'>
            {loading ? ("loading")
                : <>
                    {
                        images.map((img, i) =>
                            <div className=' flex flex-col' key={i}>
                                <img className='w-72 rounded-md' src={img} alt="" />
                                <div className='text-black'>
                                    <h4 className='text-sm font-semibold uppercase'>{data[i]?.type}</h4>
                                    <p className='text-xs capitalize'>{data[i]?.count} {data[i]?.type}</p>
                                </div>
                            </div>

                        )
                    }
                </>}
        </div>
    );
};

export default PropertyList;