/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { FcCallback } from 'react-icons/fc';
import { BsWhatsapp } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { FiMail } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';


const Contact = () => {

    useTitle('CONTACT')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ojfl25v', 'template_pshbmge', form.current, 'AVzMrJSbzz2eI98cD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    
    return (
        <div>
            <h1 className='text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 text-center font-bold '>CONTACT ME</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='w-1/2 md:mt-24 ml-6 md:ml-20'>
                    <div className='flex'>
                        <SlLocationPin className='min-w-[3.5rem] min-h-[3.5rem] text-blue-400 mb-4'></SlLocationPin>
                        <span className='text-white font-bold text-2xl ml-8 mt-3'>SHH,JUST </span>
                    </div>
                    <div className='flex'>
                        <FcCallback className='min-w-[3.5rem] min-h-[3.5rem] mb-4'></FcCallback>
                        <span className='text-white font-bold text-2xl ml-8 mt-3'>+8801521546406 </span>
                    </div>
                    <div className='flex'>
                        <BsWhatsapp className='min-w-[3.5rem] min-h-[3.5rem] mb-4 text-blue-400'></BsWhatsapp>
                        <span className='text-white font-bold text-2xl ml-8 mt-3'>+8801613915286 </span>
                    </div>
                    <div className='flex'>
                        <FiMail className='min-w-[3.5rem] min-h-[3.5rem] mb-4 text-blue-400'></FiMail>
                        <span className='text-white font-bold text-2xl ml-8 mt-4'>nishattandra2001@gmail.com </span>
                    </div>
                    <div className='flex mb-10'>
                        <a href="https://web.facebook.com/profile.php?id=100082673616604" target='_blank' rel="noreferrer"><FaFacebookSquare className='min-w-[3.5rem] min-h-[3.5rem] text-blue-400 mb-4 mr-10'></FaFacebookSquare></a>
                        <a href="https://github.com/nishattandra" target='_blank' rel="noreferrer"><BsGithub className='min-w-[3.5rem] min-h-[3.5rem] text-blue-400 mb-4 mr-10'></BsGithub></a>
                        <a href="https://www.linkedin.com/in/nishat-jahan-tandra-074633251/" target='_blank' rel="noreferrer"><BsLinkedin className='min-w-[3.5rem] min-h-[3.5rem] text-blue-400 mb-4'></BsLinkedin></a>
                    </div>
                    <Link
                        to='/'
                        className='px-8 py-3 font-bold rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>
                        Back to homepage
                    </Link>
                </div>
                <div className='w-1/2 mt-20 fromborder border-2 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input className='name' type="text" name="user_name" placeholder='Enter your name' />
                        <br />
                        <input className='email' type="email" name="user_email" placeholder='example@gmail.com' />
                        <br />
                        <textarea className='message' name="message" placeholder='write your message here...' />
                        <br />
                        <input className="ml-3 btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mb-6" type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;