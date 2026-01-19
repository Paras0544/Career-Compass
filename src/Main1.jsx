import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from './profile/NavBar';
import Footer1 from './footer/Footer1';


const Main1 = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer1/>
        </div>
    );
};

export default Main1;