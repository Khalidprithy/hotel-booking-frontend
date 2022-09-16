import React from 'react';
import { BsXCircle } from 'react-icons/bs';

const Booking = ({ setOpen, hotelId }) => {
    return (
        <div>
            <div>
                <p
                    onClick={() => setOpen(false)}
                    className="btn btn-sm"
                ><BsXCircle></BsXCircle></p>

                <span>Select your rooms</span>
            </div>
        </div>
    );
};

export default Booking;