/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import html from '../../../src/assets/images/skills/html.jpg'
import css from '../../../src/assets/images/skills/css.jpg'
import bootstrap from '../../../src/assets/images/skills/bootstrap.jpg'
import tailwind from '../../../src/assets/images/skills/tailwind.jpg'
import javascript from '../../../src/assets/images/skills/javascript.jpg'
import react from '../../../src/assets/images/skills/react.jpg'
import node from '../../../src/assets/images/skills/nodejs.jpg'
import mongodb from '../../../src/assets/images/skills/mongodb.jpg'
import firebase from '../../../src/assets/images/skills/firebase.jpg'
import api from '../../../src/assets/images/skills/api.jpg'
import java from '../../../src/assets/images/skills/java.jpg'
import git from '../../../src/assets/images/skills/git.jpg'
import github from '../../../src/assets/images/skills/github.jpg'
import netlify from '../../assets/images/skills/netlify.jpg'
import express from '../../../src/assets/images/skills/express.jpg'
import { FaArrowAltCircleRight } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Skills.css'
import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';


const Skills = () => {

    useEffect(() => {
        AOS.init();
    })

    useTitle('SKILLS')

    return (
        
        <div >
            <h1 className='text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 text-center font-bold '>MY SKILLS</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 ml-2 md:ml-10 mt-20 mb-10 text-white skillContainer'>
                <div data-aos="fade-right">
                    <img src={html} alt="" />
                    <div className='absolute  space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>HTML</h2>
                    </div>
                </div>
                <div data-aos="flip-up">
                    <img src={css} alt="" />
                    <div className='absolute  space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>CSS</h2>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <img src={bootstrap} alt="" />
                    <div className='absolute  space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>BOOTSTRAP</h2>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <img src={tailwind} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>TAILWIND</h2>
                    </div>
                </div>
                <div data-aos="flip-up">
                    <img src={javascript} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>JAVASCRIPT</h2>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <img src={react} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>REACT</h2>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <img src={mongodb} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold text-black'>MONGODB</h2>
                    </div>
                </div>
                <div data-aos="flip-up">
                    <img src={node} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>NODEJS</h2>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <img src={api} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold text-black'>REST API</h2>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <img src={express} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>EXPRESS JS</h2>
                    </div>
                </div>
                <div data-aos="flip-up">
                    <img src={firebase} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold '>FIREBASE</h2>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <img src={java} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold text-black'>JAVA</h2>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <img src={git} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>GIT</h2>
                    </div>
                </div>
                <div data-aos="flip-up">
                    <img src={github} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold'>GITHUB</h2>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <img src={netlify} alt="" />
                    <div className='absolute space-y-9 w-1/2 pl-12 -mt-20'>
                        <h2 className='md:text-4xl font-bold text-black'>NETLIFY</h2>
                    </div>
                </div>
            </div>
            <div className='text-center mb-10'>
                <Link  to='/projects'>
                    <button className="ml-3 btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9 ">My Projects <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                </Link>
            </div>
        </div>
    );
};

export default Skills;