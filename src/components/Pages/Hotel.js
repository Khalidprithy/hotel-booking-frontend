import React from 'react';
import NavOptions from '../Header/NavOptions';
import { MdLocationOn } from 'react-icons/md';
import { BsXCircle } from 'react-icons/bs';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch.js'
import { useLocation } from 'react-router-dom';

const Hotel = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)
    const [slideIndex, setSlideIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const { data, loading, error, reFetch } = useFetch(`http://localhost:5000/hotels/find/${id}`)

    console.log(data)

    const photos = [
        {
            src: "https://media.nomadicmatt.com/2021/hoteltips2.jpg",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XFEVooQxkZ12a3IiCMKi2bPMl5obwt7phw&usqp=CAU",
        },
        {
            src: "https://media.nomadicmatt.com/2021/hoteltips2.jpg",
        },
        {
            src: "https://media.nomadicmatt.com/2021/hoteltips2.jpg",
        },
        {
            src: "https://media.nomadicmatt.com/2021/hoteltips2.jpg",
        },
        {
            src: "https://media.nomadicmatt.com/2021/hoteltips2.jpg",
        },
        {
            src: "https://media.nomadicmatt.com/2021/hoteltips2.jpg",
        },
        {
            src: "https://media.nomadicmatt.com/2021/hoteltips2.jpg",
        },
        {
            src: "https://media.nomadicmatt.com/2021/hoteltips2.jpg",
        },
    ]

    const handleOpen = (i) => {
        setSlideIndex(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideIndex;
        if (direction === "l") {
            newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
        }
        else {
            newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
        }
        setSlideIndex(newSlideIndex);
    }

    return (
        <div>
            <NavOptions></NavOptions>
            {loading ? "Loading" :
                <div className=''>
                    {open && <div className='flex items-center bg-black bg-opacity-10 sticky top-0 left-0 z-40'>
                        <BsXCircle
                            onClick={() => setOpen(false)}
                            className='absolute top-5 right-5 text-2xl bg-white rounded-full cursor-pointer'></BsXCircle>
                        <BsArrowLeftCircleFill
                            onClick={() => handleMove("l")}
                            className='m-2 text-3xl text-black'></BsArrowLeftCircleFill>
                        <div className='w-full flex items-center justify-center'>
                            <img className='w-4/5 mt-5' src={photos[slideIndex].src} alt="" />
                        </div>
                        <BsArrowRightCircleFill
                            onClick={() => handleMove("r")}
                            className='m-2 text-3xl text-black'></BsArrowRightCircleFill>
                    </div>}
                    <div className='flex flex-col m-4'>
                        <h1 className='text-3xl font-semibold'>{data.name}</h1>
                        <div className='flex items-center'>
                            <MdLocationOn></MdLocationOn>
                            <span className='text-sm'>{data.address}</span>
                        </div>
                        <span className='text-success font-semibold'>Excellent location - {data.distance}m from center</span>
                        <span className='text-sm font-bold mb-4'>Book a stay over $100 and get free airport taxi</span>
                        <div className='grid grid-cols-3 mx-2 gap-1'>
                            {
                                photos.map((photo, i) =>
                                    <div>
                                        <img
                                            onClick={() => handleOpen(i)}
                                            src={photo.src} alt="" />
                                    </div>
                                )
                            }
                        </div>
                        <div className='m-2 flex gap-8'>
                            <div className='w-8/12'>
                                <h1 className='font-bold text-xl'>{data.title}</h1>
                                <p className='text-sm'>{data.description}</p>
                            </div>
                            <div className='w-4/12 flex flex-col gap-2 bg-secondary p-2'>
                                <h1 className='text-center font-bold p-1'>Perfect for small family</h1>
                                <p className='text-xs'>The Panoramic Hotel is a modern, elegant 4-star hotel perfect for a romantic, charming vacation</p>
                                <p className='text-2xl font-bold'>$421 <small>(5 nights)</small></p>
                                <button className='btn btn-sm btn-success rounded-sm w-full'>Book Now</button>
                            </div>

                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Hotel;