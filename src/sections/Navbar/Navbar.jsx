/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mr-3'> HOME</li>
        <li className='mr-3 font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>ABOUT</li >
        <li className='mr-3 font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> SKILLS</li>
        <li className='mr-3 font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> PROJECTS</li>
        <li className='mr-3 font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>CONTACT</li>
    </>
    return (
        <div className="navbar h-28 mb-2 fixed z-10 bg-opacity-30 rounded-lg md:p-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <h2 className="normal-case md:text-4xl font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Nishat Jahan</h2>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;