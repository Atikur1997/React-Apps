import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../../SIngleApp/SingleApp';

const Apps = () => {
    const AppData = useLoaderData();
    const [searchItem, setSearchItem] = useState('');
    const [loading, setLoading] = useState(true); // for page load
    const [searchLoading, setSearchLoading] = useState(false); // for search delay


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1 second loading delay for first render
        return () => clearTimeout(timer);
    }, []);


    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchItem(value);
        setSearchLoading(true);

        setTimeout(() => {
            setSearchLoading(false);
        }, 600);
    };

    const filteredApps = AppData.filter(app =>
        app.title.toLowerCase().includes(searchItem.toLowerCase())
    );


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#f7f7f7]">
                <span className='text-4xl text-gray-300 inter font-extrabold mr-2'>L </span>
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-green-500"></div>
                <span className='text-4xl  text-gray-300 inter font-extrabold ml-1'> a d i n g P a g e....</span>
            </div>
        );
    }

    return (
        <div className="bg-[#f7f7f7] py-5 min-h-screen">
            <div>
                <h1 className="text-4xl inter font-bold text-center mt-7">
                    Our All Applications
                </h1>
                <p className="text-gray-400 text-center my-3">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className="flex flex-col gap-y-2 md:flex-row justify-between mx-3 my-4">
                <p className="underline font-semibold">
                    ({filteredApps.length}) Apps Found
                </p>

                <label className="input flex items-center gap-2 border border-gray-300 rounded-lg p-2 bg-white">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        type="search"
                        required
                        placeholder="Search apps..."
                        value={searchItem}
                        onChange={handleSearchChange}
                        className="outline-none w-full"
                    />
                </label>
            </div>


            {searchLoading ? (
                <div className="flex justify-center items-center mt-20">
                    <span className='text-3xl text-gray-300 inter font-extrabold mr-2.5'>L</span>
                    <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-blue-500"></div>
                    <span className='text-3xl text-gray-300 inter font-extrabold ml-1'>a d i n g A p p s ....</span>
                </div>
            ) : filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-4">
                    {filteredApps.map((app) => (
                        <SingleApp key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-5xl mt-10 font-semibold">
                    🚫 No App Found
                </p>
            )}
        </div>
    );
};

export default Apps;
