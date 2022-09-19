import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { BsXCircle } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { SearchContext } from '../../context/SearchContex';
import useFetch from '../../hooks/useFetch';

const Booking = ({ setOpen, hotelId }) => {
    const navigate = useNavigate();
    const [selectRoom, setSelectRoom] = useState([]);
    const { dates } = useContext(SearchContext)
    const { data, loading, error } = useFetch(`http://localhost:5000/hotels/room/${hotelId}`)

    const getSelectedDate = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    const alldates = getSelectedDate(dates[0].startDate, dates[0].endDate);
    console.log(alldates);


    const isAvailable = (room) => {
        const isFound = room.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };

    const handleRoomSelect = e => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectRoom(checked ? [...selectRoom, value] : selectRoom.filter(item => item !== value))
    }

    const handleBook = async () => {
        try {
            await Promise.all(
                selectRoom.map((roomId) => {
                    const res = axios.put(`http://localhost:5000/rooms/availability/${roomId}`, {
                        dates: alldates,
                    });
                    return res.data;
                })
            );
            toast.success("Your room booked successfully")
            setOpen(false);
            navigate("/");
        } catch (err) { }
    }


    console.log(selectRoom)
    return (
        <div className='w-full fixed top-0 md:top-1/4 left-0 flex items-center justify-center'>
            <div className='relative p-1 md:p-10 bg-white rounded-lg'>
                <p
                    onClick={() => setOpen(false)}
                    className="btn btn-sm btn-link absolute top-0 right-0"
                ><BsXCircle className='text-2xl'></BsXCircle></p>
                <span className='p-2 text-xl font-bold'>Select your rooms</span>
                {
                    data.map(item =>
                        <div className='flex items-center justify-between ga-1 md:gap-4 p-2'>
                            <div>
                                <h1 className='text-xl font-semibold'>{item?.title}</h1>
                                <p>{item?.description}</p>
                                <div className='flex items-center gap-1'>
                                    <p>Max people: <span className='font-bold'>{item?.maxPeople}</span></p>
                                    <p>Price: <span className='font-semibold'>${item?.price}</span></p>
                                </div>
                            </div>
                            <div className='flex flex-wrap items-center gap-1'>
                                {item?.roomNumber.map(room =>
                                    <div className='flex flex-col'>
                                        <label htmlFor="check">{room?.number}</label>
                                        <input disabled={!isAvailable(room)} type="checkbox" id='check' value={room?._id} onChange={handleRoomSelect} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                }
                <button
                    onClick={handleBook}
                    className='btn btn-success'>Book Now</button>
            </div>
        </div>
    );
};

export default Booking;