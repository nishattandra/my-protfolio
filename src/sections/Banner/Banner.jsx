/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaArrowAltCircleRight } from 'react-icons/fa';
import img from '../../../src/assets/images/bg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'

const Banner = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='md:flex  md:flex-row-reverse'>
            <div className='flex justify-center items-center md:w-1/2' >
                <img className='img md:mt-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' data-aos="fade-left" src={img} alt="" />
            </div>
            <div className='text-white mt-10 md:mt-36 md:ml-64 font-extrabold md:w-1/2 ml-10' data-aos="fade-up">
                <h1 className='text-2xl mb-6'>Hi, This is
                    <h1 className='text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6'>NISHAT JAHAN TANDRA</h1></h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'WEB DEVELOPER',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'FRONT END DEVELOPER',
                        1000,
                        'MERN STACK DEVELOPER',
                        1000,
                        'FULL STACK DEVELOPER',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <br />
                <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9">Download Resume <FaDownload></FaDownload></button>
                <button className="ml-3 btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9">More About Me <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
        </div>

    );
};

export default Banner;