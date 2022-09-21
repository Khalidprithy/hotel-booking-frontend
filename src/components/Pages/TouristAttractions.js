import React from 'react';
import { FaMosque } from 'react-icons/fa';

const TouristAttractions = () => {
    return (
        <div>
            <h1 className='text-5xl font-semibold m-4'>Tourist Attractions</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col items-center justify-center'>
                    <FaMosque className='text-9xl text-green-400'></FaMosque>
                    <h1 className='text-4xl font-semibold'>Places to visit in Dhaka</h1>
                    <p className='text-xl font-light text-gray-600 p-6'>The city's culture is known for its rickshaws, cuisine, art festivals and religious diversity. The old city is home to around 2000 buildings from the Mughal and British periods</p>
                </div>
                <div>
                    <img className='w-screen h-fit' src="https://bangladeshembassy.ru/wp-content/uploads/2020/06/Lalbagh.png" alt="" />

                </div>
                <div>
                    <img className='w-screen h-fit' src="https://onestep4ward.com/wp-content/uploads/2011/08/dreamstime_xxl_55742473-1024x804.jpg" alt="" />
                </div>
                <div>
                    <img className='w-screen h-fit' src="https://www.wondermondo.com/wp-content/uploads/2017/10/PaharpurVihara.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default TouristAttractions;