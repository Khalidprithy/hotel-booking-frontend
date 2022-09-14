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
        <div className='grid grid-cols-1 md:grid-cols-2 bg-white pt-10'>
            <div className='bg-white pb-6'>
                <div className='p-10'>
                    <h1 className='text-2xl font-semibold'>Let's get in touch</h1>
                    <p>We'er open for any suggestions or just to have a chat.</p>
                </div>
                <div className='flex flex-col gap-4 pl-8'>
                    <div className='flex items-center gap-2'>
                        <FiPhoneCall className='text-blue-400'></FiPhoneCall>
                        <p>01455321487</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdEmail className='text-secondary'></MdEmail>
                        <p>khalidprithy@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdLocationPin className='text-orange-400'></MdLocationPin>
                        <p>Mohammodpur, Dhaka</p>
                    </div>
                </div>
            </div>
            <div className='bg-secondary'>
                <div className="p-4 mt-4">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex my-2'>
                            <input className='rounded-md py-1 px-3 w-full md:w-1/2' placeholder='Name' type="text" name="user_name" required autocomplete="off" />
                        </div>
                        <div className='flex my-2'>
                            <input className='rounded-md px-3 py-1 w-full md:w-1/2' placeholder='Email' type="email" name="user_email" required autocomplete="off" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <textarea className='rounded-md px-3 mt-1 h-24' placeholder='Message' name="message" />
                        </div>
                        <input className='btn btn-sm btn-outline text-white rounded-sm mb-2 w-24' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MailList;