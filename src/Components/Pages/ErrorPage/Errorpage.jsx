import React from 'react';
import error from '../../../assets/error-404.png';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div className='flex flex-col gap-5 h-screen justify-center items-center'>
            <img src={error} alt="" />
            <p className='text-5xl text-gray-400 font-extrabold'>Page is not Found...</p>
            <Link to='/'>
                <button className='btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-white'>Go Back</button>
            </Link>
        </div>
    );
};

export default Errorpage;