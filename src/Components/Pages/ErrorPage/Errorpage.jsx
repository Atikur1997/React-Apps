import React from 'react';
import error from '../../../assets/error-404.png';

const Errorpage = () => {
    return (
        <div className='flex flex-col gap-5 h-screen justify-center items-center'>
            <img src={error} alt="" />
            <p className='text-5xl text-gray-400 font-extrabold'>Page is not Found...</p>
        </div>
    );
};

export default Errorpage;