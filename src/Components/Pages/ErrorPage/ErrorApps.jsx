import React from 'react';
import appError from '../../../assets/App-Error.png'
import { Link } from 'react-router';

const ErrorApps = () => {
    return (
        <div className='flex flex-col justify-center items-center my-7 gap-y-3'>
            <img src={appError} />
            <h1 className='inter text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='inter text-gray-400'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to="/">
                <button className='btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-white '> Go Back !</button>
            </Link>
        </div>
    );
};

export default ErrorApps;