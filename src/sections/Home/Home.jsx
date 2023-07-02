/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import useTitle from '../../hook/useTitle';

const Home = () => {
    useTitle('HOME')
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;