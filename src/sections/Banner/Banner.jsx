/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaArrowAltCircleRight } from 'react-icons/fa';
import img from '../../../src/assets/images/bg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Banner = () => {

    const handleDownload = () => {
        // Get the file ID from the Drive link
        const fileId = '1l49Rwk8NUtCKKBbYxzagMq1fAv-dPqN5';

        // Construct the direct download link
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = 'resume.pdf';

        // Simulate a click on the link to trigger the download
        link.click();
    };
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='md:flex  md:flex-row-reverse'>
            <div className='flex justify-center items-center md:w-1/2' >
                <img className='img mt-12 md:mt-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' data-aos="fade-left" src={img} alt="" />
            </div>
            <div className='text-white mt-10 md:mt-36 md:ml-64 font-extrabold md:w-1/2 ml-10' data-aos="fade-up">
                <h1 className='text-2xl mb-6'>Hi, This is</h1>
                <h1 className='text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6'>NISHAT JAHAN TANDRA</h1>
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
                <div className='flex mt-5'>
                    <a href="https://web.facebook.com/profile.php?id=100082673616604" target='_blank' rel="noreferrer"><FaFacebookSquare className='min-w-[3rem] min-h-[3rem] text-blue-400 mb-4 mr-10'></FaFacebookSquare></a>
                    <a href="https://github.com/nishattandra" target='_blank' rel="noreferrer"><BsGithub className='min-w-[3rem] min-h-[3rem] text-blue-400 mb-4 mr-10'></BsGithub></a>
                    <a href="https://www.linkedin.com/in/nishat-jahan-tandra-074633251/" target='_blank' rel="noreferrer"><BsLinkedin className='min-w-[3rem] min-h-[3rem] text-blue-400 mb-4'></BsLinkedin></a>
                </div>
                <button onClick={handleDownload}
                    className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9">Download Resume <FaDownload></FaDownload></button>
                <Link to='/about'>
                    <button className="ml-3 btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9 mb-10">More About Me <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                </Link>
            </div>
        </div>

    );
};

export default Banner;