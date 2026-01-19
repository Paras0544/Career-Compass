import React from 'react';
import HomeHero from './HomeHero';
import JobListings from '../Job/jobListingsData';
import { GoodLifeHero } from '../others/GoodLifeHero';

const Home = () => {
    return (
        <div>
            <HomeHero/>
            <JobListings/>
            <GoodLifeHero/>
        </div>
    );
};

export default Home;