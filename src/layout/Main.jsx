/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../sections/Navbar/Navbar';
import Design from '../sections/Design/Design';
import { Outlet } from 'react-router-dom';
import Banner from '../sections/Banner/Banner';

const Main = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='fixed w-full h-full z-[-1]'>
                <Design></Design>
            </div>
        </div>
    );
};

export default Main;