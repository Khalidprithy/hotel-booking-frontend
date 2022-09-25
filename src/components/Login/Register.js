import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        userEmail: undefined,
        password: undefined,
    });

    const { user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("https://hotel-booking-server.onrender.com/auth/register", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return (
        <div>
            <div className='w-72 min-h-screen md:w-96 mx-auto'>
                <h1 className='text-4xl font-semibold m-10 text-center text-success'>Register</h1>
                <div className="card-body border rounded-lg shadow-lg m-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input
                            onChange={handleChange}
                            id='username'
                            type="text" placeholder="User Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input
                            onChange={handleChange}
                            id='userEmail'
                            type="email" placeholder="User Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            onChange={handleChange}
                            id='password'
                            type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {error && <span className='text-error'>{error.message}</span>}
                    <div className="form-control mt-2">
                        <button
                            disabled={loading} onClick={handleClick}
                            className="btn w-1/2 mx-auto btn-success">Register</button>
                    </div>
                    <Link to='/login'>Login</Link>
                </div>

                <div>
                    {/* <div class="login-box">
                    <h2>Login</h2>
                    <form>
                        <div class="user-box">
                            <input type="text" name="" required="" />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" required="" />
                            <label>Password</label>
                        </div>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            login
                        </a>
                    </form>
                </div> */}
                </div>
            </div>

        </div>
    );
};

export default Register;