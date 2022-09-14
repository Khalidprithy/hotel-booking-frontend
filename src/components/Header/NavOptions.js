import React from 'react';
import { FaBed } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { GiCampingTent } from 'react-icons/gi';
import { BsFillHouseFill } from 'react-icons/bs';

const NavOptions = () => {
    return (
        <div className='flex gap-4 bg-primary py-2 px-10'>
            <div className='flex items-center rounded-full p-1 px-3 gap-1 hover:bg-success text-gray-100'>
                <p><FaBed className='text-xl'></FaBed></p>
                <p>Hotels</p>
            </div>
            <div className='flex items-center rounded-full p-1 px-3 gap-1 hover:bg-success text-gray-100'>
                <p><BsFillHouseFill className='text-xl'></BsFillHouseFill></p>
                <p>Resort</p>
            </div>
            <div className='flex items-center rounded-full p-1 px-3 gap-1 hover:bg-success text-gray-100'>
                <p><GiCampingTent className='text-xl'></GiCampingTent></p>
                <p>Camping</p>
            </div>
            <div className='flex items-center rounded-full p-1 px-3 gap-1 hover:bg-success text-gray-100'>
                <p><AiFillCar className='text-xl'></AiFillCar></p>
                <p>Cars</p>
            </div>
        </div>
    );
};

export default NavOptions;