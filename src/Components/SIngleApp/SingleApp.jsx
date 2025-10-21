import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";


const SingleApp = ({ app}) => {
    const { image, title, downloads, ratingAvg, companyName } = app;

    return (
        <div className='p-4 bg-white rounded-md cursor-pointer'>
            <img className='w-[300px] h-[350px] mx-auto rounded-2xl' src={image} />
            <h2 className='text-center my-4 text-xl font-semibold'>{title}:{companyName}</h2>
            <div className='flex justify-between'>
                <p className='flex gap-3 items-center inter bg-[#f1f5e8] px-3 py-1 rounded-md text-[#00d390]'><FaDownload /> {(downloads / 1000000).toFixed(2)}M</p>
                <p className='flex gap-3 items-center inter bg-[#fff0e1] px-3 text-[#ff8811] font-semibold rounded-md'><FaStar /> {ratingAvg}</p>
            </div>
        </div>
    );
};

export default SingleApp;