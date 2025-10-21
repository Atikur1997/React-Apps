import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/downloads.png';
import star from '../../assets/star.png';
import review from '../../assets/reviews.png';
import { toast, ToastContainer } from 'react-toastify';
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AppDetails = () => {
    const { id } = useParams();
    const AppData = useLoaderData();
    const singleView = AppData.find(app => app.id === parseInt(id))
    const { image, title, downloads, ratingAvg, companyName, description, size, reviews, ratings } = singleView;

    const [install, setInstall] = useState(`Install ${size} MB`)
    const [isDisable, setIsDisable] = useState(false)

    const handleInstall = () => {
        setInstall('Installed');
        toast.success(`${title} App Installed Successfully!`, {
            position: "top-center",
            autoClose: 5000,
            theme: "light",

        })
        setIsDisable(true)
    };
    return (
        <div className='py-6'>
            <div className='flex mx-3.5 gap-x-25'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='flex-2'>
                    <div >
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                        <p className='text-gray-400'>Developed By:<span className='bg-[linear-gradient(125.07deg,_#632ee3,_#9f62f2)] bg-clip-text text-transparent ml-2'>{companyName}</span></p>
                        <div className='flex flex-col md:flex-row my-3 gap:50 md:gap-50 py-5 border-y-2 border-gray-300 mt-5'>
                            <div>
                                <img src={download} alt="" />
                                <p className='text-gray-400 my-2 inter'>Downloads</p>
                                <p className='text-4xl font-bold'>{(downloads / 1000000).toFixed(2)}M</p>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <p className='text-gray-400 my-2 inter'>Average Ratings</p>
                                <p className='text-4xl font-bold'> {ratingAvg}</p>
                            </div>
                            <div>
                                <img src={review} alt="" />
                                <p className='text-gray-400 my-2 inter'>Total Reviews </p>
                                <p className='text-4xl font-bold'>{reviews}</p>
                            </div>
                        </div>

                    </div>
                    <button className={`btn btn-success text-white ${isDisable && 'btn-disabled'}`} onClick={handleInstall}  >{install}</button>
                </div>


            </div>
            <div className='my-5 border-b border-gray-300 w-full mx-auto py-5'>
                <p className='text-lg font-semibold pl-3'> Ratings</p>
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart
                        layout="vertical"
                        data={[...ratings].reverse()}
                        margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
                    >
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#ff8811" />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
            <div className='w-[95%] mx-auto text-justify'>
                <p className='text-lg font-semibold '> Description</p>
                <p className='text-gray-400 my-2 inter'>{description}</p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default AppDetails;