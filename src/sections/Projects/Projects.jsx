/* eslint-disable no-unused-vars */
import React from 'react';
import project1 from '../../../src/assets/images/projects/assignment-12.png'
import project2 from '../../../src/assets/images/projects/assignment11.png'
import project3 from '../../../src/assets/images/projects/assignment10.png'
import { AiOutlineLink } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

import './Projects.css'
import useTitle from '../../hook/useTitle';

const Projects = () => {
    useTitle('PROJECTS')
    return (
        <div>
            <h1 className='text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 text-center font-bold '>MY PROJECTS</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 mb-10'>
                <div className="image-container w-1/2 mx-auto">
                    <img
                        src={project1}
                        alt="Image"
                        className=""
                    />
                </div>
                <div className='ml-4 md:w-1/2 text-white'>
                    <h2 className='text-3xl text-center mt-4 font-bold'>SPORT&apos;s Camp</h2>
                    <h3 className='text-xl font-bold'>Features:</h3>
                    <p> ● User Register and Login system with stripe payment gateway implementation.</p>
                    <p> ● Popular Classes by number of enrollment, popular instructors.</p>
                    <p> ● Dashboard: User selected class, user enrolled class, user payment history. Instructors can add new class. Admin manage classes and users.</p>
                    <h3 className='text-xl font-bold'>Technologies:</h3>
                    <p>React, Express.js, Tailwind, React Router, Firebase, MongoDB, Stripe Payment Gateway, TanStack Query</p>
                    <div className='flex'>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-5 mr-3' href="https://sports-camp-4e1c0.web.app/" target='_blank' rel="noreferrer">Live<AiOutlineLink></AiOutlineLink></a>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-5 mr-3' href="https://github.com/nishattandra/sportsCamp-client" target='_blank' rel="noreferrer">Client<BsGithub></BsGithub></a>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-5' href="https://github.com/nishattandra/sportsCamp-server" target='_blank' rel="noreferrer">Server<BsGithub></BsGithub></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 mb-10'>
                <div className="image-container w-1/2 mx-auto">
                    <img
                        src={project2}
                        alt="Image"
                        className=""
                    />
                </div>
                <div className='ml-4 md:w-1/2 text-white'>
                    <h2 className='text-3xl text-center mt-10 font-bold'>KIDs ZOne</h2>
                    <h3 className='text-xl font-bold'>Features:</h3>
                    <p> ● Toy gallery with Teddy, Dinosaur, and Unicorn. Also, have the latest collection.</p>
                    <p> ● Users can see the available toys.</p>
                    <p> ● Users must log in or register to add a toy and delete or update the toy.</p>
                    <h3 className='text-xl font-bold'>Technologies:</h3>
                    <p>React, Express.js, Tailwind, DaisyUi, React Router, Firebase</p>
                    <div className='flex'>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9 mr-3' href="https://assignment-11-1d2eb.web.app/" target='_blank' rel="noreferrer">Live<AiOutlineLink></AiOutlineLink></a>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9 mr-3' href="https://github.com/nishattandra/kids-zone-client" target='_blank' rel="noreferrer">Client<BsGithub></BsGithub></a>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9' href="https://github.com/nishattandra/Kids-zone-server" target='_blank' rel="noreferrer">Server<BsGithub></BsGithub></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 mb-10'>
                <div className="image-container w-1/2 mx-auto">
                    <img
                        src={project3}
                        alt="Image"
                        className=""
                    />
                </div>
                <div className='ml-4 md:w-1/2 text-white'>
                    <h2 className='text-3xl text-center mt-10 font-bold'>Food Hunter</h2>
                    <h3 className='text-xl font-bold'>Features:</h3>
                    <p> ● Online Recipe Tutorials with chef-specific recipes.</p>
                    <p> ● User registration, and login options via GitHub and Google.</p>
                    <p> ● After login, the user can see the recipe.</p>
                    <h3 className='text-xl font-bold'>Technologies:</h3>
                    <p>React, Express.js, React Bootstrap, React Router, Firebase</p>
                    <div className='flex'>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9 mr-3' href="https://assignment-10-ad2b3.web.app/" target='_blank' rel="noreferrer">Live<AiOutlineLink></AiOutlineLink></a>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9 mr-3' href="https://github.com/nishattandra/Food-hunter-client" target='_blank' rel="noreferrer">Client<BsGithub></BsGithub></a>
                        <a className='flex btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white font-bold mt-9' href="https://github.com/nishattandra/food-hunter-server" target='_blank' rel="noreferrer">Server<BsGithub></BsGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;