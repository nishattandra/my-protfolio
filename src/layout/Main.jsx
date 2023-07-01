/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../sections/Navbar/Navbar';
import Design from '../sections/Design/Design';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Design></Design>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;