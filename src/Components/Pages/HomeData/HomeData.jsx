import React, { Suspense } from 'react';
import SingleApp from '../../SIngleApp/SingleApp';
import { Link } from 'react-router';

const HomeData = ({ data }) => {
    return (
        <div className='bg-[#f7f7f7] py-5'>
            <Suspense fallback={<div>Loading...</div>}>
                <h1 className='text-3xl font-extrabold text-center inter my-3'>Trending Apps</h1>
                <p className='text-center text-gray-400 inter mb-4'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                    {
                        data.map(app => <SingleApp key={app.id} app={app} ></SingleApp>)
                    }
                </div>
                <div className='text-center my-4'>
                    <Link to="/apps"><button className="btn btn-primary w-[300px] inter text-xl">Show All</button></Link>
                </div>
            </Suspense>
        </div>
    );
};

export default HomeData;