/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li className=''> <NavLink className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold' : 'mr-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600')} to='/'>HOME</NavLink> </li>
        <li className=''> <NavLink className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold' : 'mr-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600')} to='/about'>ABOUT</NavLink> </li>
        <li className=''> <NavLink className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold' : 'mr-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600')} to='/skills'>SKILLS</NavLink> </li>
        <li className=''> <NavLink className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold' : 'mr-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600')} to='/projects'>PROJECTS</NavLink> </li>
        <li className=''> <NavLink className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold' : 'mr-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600')} to='/contact'>CONTACT</NavLink> </li>
    </>
    return (
        <div className="navbar h-28 bg-opacity-30 rounded-lg md:p-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-opacity-100 rounded-box w-24">
                        {navItems}
                    </ul>
                </div>
                <h2 className="normal-case md:text-4xl font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Nishat Jahan</h2>
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