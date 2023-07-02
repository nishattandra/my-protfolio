/* eslint-disable no-unused-vars */
import React from 'react';
import useTitle from '../../hook/useTitle';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowAltCircleRight } from 'react-icons/fa';
import img from '../../../src/assets/images/bg.png'

const About = () => {
    useTitle('ABOUT')
    return (
        <div >
            <h1 className='text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 text-center font-bold '>ABOUT ME</h1>
            <div className='md:flex md:flex-row-reverse'>
                <div className='flex justify-center items-center md:w-1/2' >
                    <img className='' data-aos="fade-left" src={img} alt="" />
                </div>
                <div className='text-white mt-10 md:mt-10 md:ml-36 md:w-1/2 ml-10' data-aos="fade-up">
                    <h1 className='text-2xl mb-6 font-bold '>Hi, I&apos;m Nishat Jahan Tandra.</h1>
                    <p>I am an undergrad student. Currently, I am doing my BSc in CSE at Jashore University of Science and Technology. I&apos;m particularly interested in web development as it relates to my academics. I&apos;ve been practicing web developing for the last six months, and I&apos;m currently enrolled in Programming Hero&apos;s complete web development course. I&apos;m also taking up other web development skills. For the front end, I&apos;ve studied HTML, CSS, Bootstrap, Tailwind, JavaScript, React, and React Roter. For the backend, I am proficient in Node.js and Express.js. For databases, I frequently use Firebase and Mongodb. I am also familiar with utilizing npm, git, GitHub, netlify, surge, and Firebase to deploy my projects.</p>
                    <p>My greatest strength is that I work really hard. I finish my task on time.I don&apos;t take a break till my task is done. New technology is not an issue for me at all. I like working in groups where I can share ideas with others and gain knowledge from them.I collaborate with my friends in groups on projects and presentations for academic purposes. I&apos;m an effective communicator. I am good at keeping things private.I have a strong passion for what I do.</p>
                    <br />
                    <Link to='/skills'>
                        <button className=" btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-4">My SKills <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default About;