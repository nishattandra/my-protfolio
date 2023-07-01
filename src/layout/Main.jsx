/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../sections/Navbar/Navbar';
import Design from '../sections/Design/Design';
import { Outlet } from 'react-router-dom';
import Banner from '../sections/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Design></Design>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;