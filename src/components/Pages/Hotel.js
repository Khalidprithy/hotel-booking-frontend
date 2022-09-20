import React, { useContext } from 'react';
import NavOptions from '../Header/NavOptions';
import { MdLocationOn } from 'react-icons/md';
import { BsXCircle } from 'react-icons/bs';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch.js'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContex';
import { AuthContext } from '../../context/AuthContext';
import Booking from './Booking';
import room1 from '../../img/room/rooms1.jpg'
import room2 from '../../img/room/rooms2.jpg'
import room3 from '../../img/room/rooms3.jpg'
import room4 from '../../img/room/rooms4.jpg'
import room5 from '../../img/room/rooms5.jpg'
import room6 from '../../img/room/rooms6.jpg'
import room7 from '../../img/room/rooms7.jpg'
import room8 from '../../img/room/rooms8.jpg'
import room9 from '../../img/room/rooms9.jpg'

const Hotel = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split("/")[2];
    console.log(id)
    const [slideIndex, setSlideIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [openBooking, setOpenBooking] = useState(false);

    const { user } = useContext(AuthContext);

    const { data, loading, error, reFetch } = useFetch(`http://localhost:5000/hotels/find/${id}`)

    const { dates, options } = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);


    const photos = [
        {
            src: room1,
        },
        {
            src: room2,
        },
        {
            src: room3,
        },
        {
            src: room4,
        },
        {
            src: room5,
        },
        {
            src: room6,
        },
        {
            src: room7,
        },
        {
            src: room8,
        },
        {
            src: room9,
        },

    ]

    const handleOpen = (i) => {
        setSlideIndex(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideIndex;
        if (direction === "l") {
            newSlideIndex = slideIndex === 0 ? 8 : slideIndex - 1;
        }
        else {
            newSlideIndex = slideIndex === 8 ? 0 : slideIndex + 1;
        }
        setSlideIndex(newSlideIndex);
    }

    const handleClick = () => {
        if (user) {
            setOpenBooking(true);

        } else {
            navigate('/login')
        }

    }


    return (
        <div>
            <NavOptions></NavOptions>
            {loading ? "Loading" :
                <div className=''>
                    {open && <div className='flex items-center bg-black bg-opacity-10 sticky top-0 left-0 z-40'>
                        <BsXCircle
                            onClick={() => setOpen(false)}
                            className='absolute top-5 right-5 text-2xl lg:text-6xl bg-white rounded-full cursor-pointer'></BsXCircle>
                        <BsArrowLeftCircleFill
                            onClick={() => handleMove("l")}
                            className='m-2 text-3xl lg:text-6xl rounded-full text-black'></BsArrowLeftCircleFill>
                        <div className='w-full flex items-center justify-center'>
                            <img className='w-4/5 mt-5' src={photos[slideIndex].src} alt="" />
                        </div>
                        <BsArrowRightCircleFill
                            onClick={() => handleMove("r")}
                            className='m-2 text-3xl lg:text-6xl text-black'></BsArrowRightCircleFill>
                    </div>}
                    <div className='flex flex-col m-4'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-3xl md:text-5xl font-semibold'>{data.name}</h1>
                            <button
                                onClick={handleClick}
                                className='btn btn-success btn-sm rounded-sm'>Book Now</button>
                        </div>
                        <div className='flex items-center'>
                            <MdLocationOn></MdLocationOn>
                            <span className='text-sm md:text-xl'>{data.address}</span>
                        </div>
                        <span className='text-success text-md md:text-xl font-semibold'>Excellent location - {data.distance}m from center</span>
                        <span className='text-sm md:text-xl font-bold mb-4'>Book a stay over $100 and get free airport taxi</span>
                        <div className='grid grid-cols-3 mx-2 '>
                            {
                                photos.map((photo, i) =>
                                    <div>
                                        <img
                                            onClick={() => handleOpen(i)}
                                            src={photo?.src} alt=""
                                            className='hover:scale-95 duration-300 ease-in'
                                        />

                                    </div>
                                )
                            }
                        </div>
                        <div className='m-2 flex flex-col md:flex-row gap-8'>
                            <div className='w-full md:w-8/12'>
                                <h1 className='font-bold text-xl md:text-4xl'>{data.title}</h1>
                                <p className='text-sm md:text-2xl'>{data.description}</p>
                            </div>
                            <div className='w-full md:w-4/12 flex flex-col gap-2 bg-secondary p-2'>
                                <h1 className='text-center text-xl md:text-3xl font-bold p-1'>Perfect for small family</h1>
                                <p className='text-xs md:text-xl'>The Panoramic Hotel is a modern, elegant 4-star hotel perfect for a romantic, charming vacation</p>
                                <p className='text-2xl font-bold'>${days * data.cheapestPrice * options.room} <small>({days} nights)</small></p>
                                <button
                                    onClick={handleClick}
                                    className='btn btn-sm btn-success rounded-sm w-full'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>}
            {openBooking && <Booking
                setOpen={setOpenBooking}
                hotelId={id}
            ></Booking>}
        </div>
    );
};

export default Hotel;