import React from 'react';
import { FaBed } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { GiCampingTent } from 'react-icons/gi';
import { BsFillHouseFill } from 'react-icons/bs';

const NavOptions = () => {
    return (
        <div className='flex gap-0 md:gap-4 bg-primary py-4 px-1 md:px-10'>
            <div className='flex items-center rounded-full p-1 px-3 md:px-4 gap-1 hover:bg-success text-gray-100'>
                <p><FaBed className='text-sm md:text-4xl lg:text-6xl'></FaBed></p>
                <p className='text-sm md:text-3xl lg:text-4xl'>Hotels</p>
            </div>
            <div className='flex items-center rounded-full p-1 px-3 md:px-4 gap-1 hover:bg-success text-gray-100'>
                <p><BsFillHouseFill className='text-sm md:text-4xl lg:text-6xl'></BsFillHouseFill></p>
                <p className='text-sm md:text-3xl lg:text-4xl'>Resort</p>
            </div>
            <div className='flex items-center rounded-full p-1 px-3 md:px-4 gap-1 hover:bg-success text-gray-100'>
                <p><GiCampingTent className='text-sm md:text-4xl lg:text-6xl'></GiCampingTent></p>
                <p className='text-sm md:text-3xl lg:text-4xl'>Camping</p>
            </div>
            <div className='flex items-center rounded-full p-1 px-3 md:px-4 gap-1 hover:bg-success text-gray-100'>
                <p><AiFillCar className='text-sm md:text-4xl lg:text-6xl'></AiFillCar></p>
                <p className='text-sm md:text-3xl lg:text-4xl'>Cars</p>
            </div>
        </div>
    );
};

export default NavOptions;