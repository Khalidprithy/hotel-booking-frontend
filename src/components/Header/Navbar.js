import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar bg-primary">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-2xl text-white">HotelView</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered rounded-md" />
                    </div>
                    {!user ?
                        <button className='btn btn-success'>Login</button>
                        :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user.username}
                                    </a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>}
                </div>
            </div>

        </div>
    );
};

export default Navbar;