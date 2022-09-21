import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import NavOptions from '../Header/NavOptions';
import SearchItems from './SearchItems';
import useFetch from '../../hooks/useFetch.js'

const List = () => {

    const location = useLocation();
    const [openDate, setOpenDate] = useState(false);

    const [destination, setDestination] = useState(location.state.destination)
    const [dates, setDates] = useState(location.state.dates)
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);


    const { data, loading, error, reFetch } = useFetch(`https://hotel-booking-server.onrender.com/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

    const handleClick = () => {
        reFetch();
    }

    return (
        <div>
            <NavOptions></NavOptions>
            <div className='flex flex-col justify-between md:flex-row mx-6 mt-2'>
                <div className='w-full md:w-1/4 lg:w-3/12 mb-4'>
                    <div className='flex flex-col bg-secondary rounded-md p-2 sticky top-4 max-h-max'>
                        <h1 className='text-xl font-semibold'>Search </h1>
                        <div className='flex flex-col'>
                            <label className='font-semibold pb-1 mt-2' htmlFor="location">Destination</label>
                            <input className='rounded-md h-8 px-2' type="text" name="location" id="location" placeholder={destination} />
                            <label className='font-semibold pb-1 mt-2' htmlFor="date">Check in</label>
                            <span
                                className='bg-white rounded-md p-1'
                                onClick={() => setOpenDate(!openDate)}
                            >{(dates[0].startDate?.toDateString())} to  {(dates[0].endDate?.toDateString())}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className="absolute left-1/3 top-12"
                                minDate={new Date()}
                            ></DateRange>}
                            <label className='font-semibold' htmlFor="">Options</label>
                            <div className='px-2'>
                                <div className='flex justify-between items-center'>
                                    <span className=''>Min Price <small>per night</small></span>
                                    <input
                                        onChange={e => setMin(e.target.value)}
                                        className='m-2 w-16' type="number" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Max Price <small>per night</small></span>
                                    <input
                                        onChange={e => setMax(e.target.value)}
                                        className='m-2 w-16' type="number" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Adult</span>
                                    <input className='m-2 w-16 px-1' type="number" value={options.adult} />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Children</span>
                                    <input className='m-2 w-16 px-1' type="number" value={options.children} />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Room</span>
                                    <input className='m-2 w-16 px-1' type="number" value={options.room} />
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleClick}
                            className='btn btn-sm btn-success rounded-sm'>Search</button>
                    </div>
                </div>
                <div className='w-full md:w-0 lg:1/12'>

                </div>
                <div className='w-full md:w-3/4 lg:w-8/12'>
                    {
                        loading ? "Loading" : <>
                            {
                                data.map(item => <SearchItems
                                    key={item._id}
                                    item={item}
                                ></SearchItems>)
                            }
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default List;

// {`${format(date[0].startDate, 'MM/dd/yyyy')} to  ${format(date[0].endDate, 'MM/dd/yyyy')}`}