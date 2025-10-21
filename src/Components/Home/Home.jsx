import React from 'react';
import HomeData from '../Pages/HomeData/HomeData';
import Banner from '../Pages/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
  
    return (
        <div>
            <Banner></Banner>
            <HomeData data={data}></HomeData>
        </div>
    );
};

export default Home;