import React from 'react';
import NavOptions from '../Header/NavOptions';
import { MdLocationOn } from 'react-icons/md';
import { BsXCircle } from 'react-icons/bs';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';

const Hotel = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [open, setOpen] = useState(false);

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
                    <h1 className='text-3xl font-semibold'>Studio Apartment</h1>
                    <div className='flex items-center'>
                        <MdLocationOn></MdLocationOn>
                        <span className='text-sm'>Abul St 124 Dhaka</span>
                    </div>
                    <span className='text-success font-semibold'>Excellent location - 500m from center</span>
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
                            <h1 className='font-bold text-xl'>Stay close to the City mall</h1>
                            <p className='text-sm'>The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea.

                                The rooms at the Panoramic Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay in Taormina, suggesting itineraries, guided visits and some good restaurants in the historic centre.</p>
                        </div>
                        <div className='w-4/12 flex flex-col gap-2 bg-secondary p-2'>
                            <h1 className='text-center font-bold p-1'>Perfect for small family</h1>
                            <p className='text-xs'>The Panoramic Hotel is a modern, elegant 4-star hotel perfect for a romantic, charming vacation</p>
                            <p className='text-2xl font-bold'>$421 <small>(5 nights)</small></p>
                            <button className='btn btn-sm btn-success rounded-sm w-full'>Book Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;