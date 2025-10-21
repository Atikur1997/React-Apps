import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../../SIngleApp/SingleApp';

const Apps = () => {
    const AppData = useLoaderData();
    const [searchItem, setSearchItem] = useState('');


    const filteredApps = AppData.filter(app =>
        app.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div className="bg-[#f7f7f7] py-5">
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

                <label className="input">
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
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </label>
            </div>


            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
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
