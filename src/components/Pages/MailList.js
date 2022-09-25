import React, { useRef } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const MailList = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yjyfszl', 'template_l26d6fj', form.current, '9CH62NioqIjo3L1fc')
            .then((result) => {
                toast.success('Email sent successfully')
            }, (error) => {
                toast.error('Could not sent Email, Try again')
            });
    };




    return (
        <div className='bg-white pt-10'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Contact us</h1>
                <p className='text-2xl font-light'>Feel free to give us any feedback</p>
            </div>
            <div className='bg-secondary m-2 rounded-lg'>
                <div className="p-4 mt-4 w-1/3 mx-auto">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex my-2'>
                            <input className='rounded-md py-1 px-3 w-full md:w-1/2' placeholder='Name' type="text" name="user_name" required autoComplete="off" />
                        </div>
                        <div className='flex my-2'>
                            <input className='rounded-md px-3 py-1 w-full md:w-1/2' placeholder='Email' type="email" name="user_email" required autoComplete="off" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <textarea className='rounded-md px-3 mt-1 h-44' placeholder='Message' name="message" />
                        </div>
                        <input className='btn btn-sm btn-outline text-white rounded-sm mb-2 w-24' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MailList;