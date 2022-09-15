import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import NavOptions from '../Header/NavOptions';
import SearchItems from './SearchItems';

const List = () => {

    const location = useLocation();
    const [openDate, setOpenDate] = useState(false);

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

    console.log(location)
    return (
        <div>
            <NavOptions></NavOptions>
            <div className='flex mx-6 mt-2'>
                <div className='w-1/3 mb-4'>
                    <div className='flex flex-col bg-secondary rounded-md p-2 sticky top-4 max-h-max'>
                        <h1 className='text-xl font-semibold'>Search </h1>
                        <div className='flex flex-col'>
                            <label className='font-semibold pb-1 mt-2' htmlFor="location">Destination</label>
                            <input className='rounded-md h-8 px-2' type="text" name="location" id="location" placeholder={destination} />
                            <label className='font-semibold pb-1 mt-2' htmlFor="date">Check in</label>
                            <span
                                className='bg-white rounded-md p-1'
                                onClick={() => setOpenDate(!openDate)}
                            >{(date[0].startDate?.toDateString())} to  {(date[0].endDate?.toDateString())}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="absolute left-1/3 top-12"
                                minDate={new Date()}
                            ></DateRange>}
                            <label className='font-semibold' htmlFor="">Options</label>
                            <div className='px-2'>
                                <div className='flex justify-between items-center'>
                                    <span className=''>Min Price <small>per night</small></span>
                                    <input className='m-2 w-16' type="number" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Max Price <small>per night</small></span>
                                    <input className='m-2 w-16' type="number" />
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
                        <button className='btn btn-sm btn-success rounded-sm'>Search</button>
                    </div>
                </div>
                <div className='w-2/3'>
                    <SearchItems></SearchItems>
                </div>
            </div>
        </div>
    );
};

export default List;

// {`${format(date[0].startDate, 'MM/dd/yyyy')} to  ${format(date[0].endDate, 'MM/dd/yyyy')}`}