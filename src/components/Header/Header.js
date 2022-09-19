import React from 'react';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import NavOptions from './NavOptions';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContex';



const Header = () => {

    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const navigate = useNavigate();

    const [dates, setDates] = useState([
        {
            setDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
        navigate('/hotels', { state: { destination, dates, options } })
    }

    return (
        <div className='relative'>
            <NavOptions></NavOptions>
            <div className='bg-primary h-48'>
                <h1 className='text-2xl md:text-4xl text-white font-bold px-10 pt-4'>Find the cheapest hotel with best deals to 5 star hotels. <span className='hidden md:block'>Plan your next vacation now</span> </h1>
                <div className='flex gap-4 pl-10 m-2 '>
                    <button className='btn btn-md btn-success rounded-sm mt-2 hidden md:block'>Best Deals</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center ml-6 lg:ml-10 w-full absolute -bottom-32 md:-bottom-6'>
                <input
                    onChange={e => setDestination(e.target.value)}
                    className='h-12 w-52 border-2 border-secondary px-2 absolute md:relative -top-24 md:top-0 left-16 md:left-0' type="text" name="" id="" placeholder='What are you looking?' required />
                <div className='z-20'>
                    <span
                        onClick={() => setOpenDate(!openDate)}
                        className='w-52 h-12 border-2 border-secondary px-2 py-3 bg-white absolute md:relative -top-12 left-16 md:top-0 md:left-0'>{dates[0].startDate ? `${(dates[0].startDate?.toDateString())} to  ${(dates[0].endDate?.toDateString())} ` : `Check-in to Check-out`} </span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className="absolute left-1/3 top-12"
                        minDate={new Date()}
                    ></DateRange>}
                </div>
                <div className='z-20'>
                    <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className='w-52 md:w-64 flex items-center justify-center border border-secondary px-2 py-3 bg-white absolute md:relative -top-0 left-16 md:top-0 md:left-0'>{`${options.adult} Adult ${options.children} Children ${options.room} Room`}</span>
                    {openOptions && <div className='absolute left-20 md:left-1/2 top-12 md:top-4/5 bg-white text-gray rounded-lg p-4'>
                        <div className='flex justify-between w-40'>
                            <span>Adult</span>
                            <div className='flex gap-1'>
                                <button
                                    disabled={options.adult <= 1}
                                    onClick={() => handleOption("adult", "d")}
                                    className='btn btn-xs btn-primary mb-1'>-</button>
                                <span>{options.adult}</span>
                                <button
                                    onClick={() => handleOption("adult", "i")}
                                    className='btn btn-xs btn-primary mb-1'>+</button>
                            </div>
                        </div>
                        <div className='flex justify-between w-40'>
                            <span>Children</span>
                            <div className='flex gap-1'>
                                <button
                                    disabled={options.children <= 0}
                                    onClick={() => handleOption("children", "d")}
                                    className='btn btn-xs btn-primary mb-1'>-</button>
                                <span>{options.children}</span>
                                <button
                                    onClick={() => handleOption("children", "i")}
                                    className='btn btn-xs btn-primary mb-1'>+</button>
                            </div>
                        </div>
                        <div className='flex justify-between w-40'>
                            <span>Room</span>
                            <div className='flex gap-1'>
                                <button
                                    disabled={options.room <= 1}
                                    onClick={() => handleOption("room", "d")}
                                    className='btn btn-xs btn-primary mb-1'>-</button>
                                <span>{options.room}</span>
                                <button
                                    onClick={() => handleOption("room", "i")}
                                    className='btn btn-xs btn-primary mb-1'>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <button
                    onClick={() => handleSearch()}
                    className='btn btn-success rounded-none border-secondary mt-12 md:mt-0 w-52 md:w-2/12 lg:mr-10'>Search</button>
            </div>
        </div>
    );
};

export default Header;

// value={`${format(date[0].startDate, 'MM/dd/yyyy')} to  ${format(date[0].endDate, 'MM/dd/yyyy')}`}