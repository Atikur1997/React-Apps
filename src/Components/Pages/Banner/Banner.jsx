import React from 'react';
import playStore from '../../../assets/appstore.png'
import appStore from '../../../assets/Apllestore.png'
import hero from '../../../assets/hero.png'


const Banner = () => {
    return (
        <div className='bg-[#f7f7f7] py-7'>
            <div className='text-center'>
                <h1 className='inter text-center text-4xl font-semibold'>We Build <br /><span className='bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent'>Productive</span> Apps</h1>
                <p className='w-[54%] mx-auto inter my-3 text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex flex-col md:flex-row items-center md:justify-center gap-2 mb-10'>
                <div className='w-[200px]'>
                    <button className='btn flex inter font-semibold  w-full  md:justify-around'><img src={playStore} /> Google play</button>
                </div>
                <div className='w-[200px]'>
                    <button className='btn flex inter font-semibold  w-full  md:justify-around'><img src={appStore} /> App Store</button>
                </div>
            </div>
            <div >
                <img className='mx-auto' src={hero} alt="" />
            </div>
            <div className='inter bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] py-20 text-white'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold'>Trusted by Millions, Built for You</h1>
                </div>
                <div className='inter grid grid-cols-1 md:grid-cols-3 justify-items-center items-center mt-6'>
                    <div>
                        <p className='text-sm text-[#ffffff] opacity-80 inter text-center'>Total Downloads</p>
                        <h1 className='text-center text-3xl font-bold my-1.5'>29.6M</h1>
                        <p className='text-center text-sm text-[#ffffff] opacity-80 inter'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-center text-sm text-[#ffffff] opacity-80 inter'>Total Reviews</p>
                        <h1 className='inter text-center text-4xl font-bold my-1.5'>906K</h1>
                        <p className='text-center text-sm text-[#ffffff] opacity-80 inter'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-center text-sm text-[#ffffff] opacity-80 inter'>Active Apps</p>
                        <h1 className='text-center text-3xl font-bold my-1.5 inter'>132+</h1>
                        <p className='text-center text-sm text-[#ffffff] opacity-80 inter'>31 more will Launch</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;