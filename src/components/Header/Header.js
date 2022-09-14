import React from 'react';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import NavOptions from './NavOptions';
import { useNavigate } from 'react-router-dom';



const Header = () => {

    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const navigate = useNavigate();

    const [date, setDate] = useState([
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

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })
    }

    return (
        <div className='relative'>
            <NavOptions></NavOptions>
            <div className='bg-primary h-40'>
                <h1 className='text-3xl text-white font-bold px-10 pt-4'>Register to get the full experience of HotelView and win exciting gifts</h1>
                <div className='flex gap-4 pl-10 m-2'>
                    <button className='btn btn-sm btn-success rounded-sm btn-outline'>Register</button>
                    <button className='btn btn-sm btn-success rounded-sm btn-outline'>Login</button>
                </div>
            </div>
            <div className='flex items-center justify-center ml-10 w-full absolute -bottom-6'>
                <input
                    onChange={e => setDestination(e.target.value)}
                    className='h-12 border-2 border-secondary px-2' type="text" name="" id="" placeholder='What are you looking?' />
                <div className='z-20'>
                    <span
                        onClick={() => setOpenDate(!openDate)}
                        className='w-24 border-2 border-secondary px-2 py-3 bg-white'>Check-in To Check-out</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="absolute left-1/3 top-12"
                        minDate={new Date()}
                    ></DateRange>}
                </div>
                <div className='z-20'>
                    <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className='w-24 border-2 border-secondary px-2 py-3 bg-white'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    {openOptions && <div className='absolute top-4/5 bg-white text-gray rounded-lg p-4'>
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
                    className='btn btn-success rounded-none border-secondary'>Search</button>
            </div>
        </div>
    );
};

export default Header;

// value={`${format(date[0].startDate, 'MM/dd/yyyy')} to  ${format(date[0].endDate, 'MM/dd/yyyy')}`}