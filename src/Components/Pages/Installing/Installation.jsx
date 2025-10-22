import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { installedIds } from '../../Utility/addToDB';
import InstalledAppsList from '../InstalledAppsList/InstalledAppsList';

const Installation = () => {
    const data = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);

    const loadInstalled = () => {
        const storedIds = installedIds();
        const apps = data.filter(app => storedIds.includes(app.id));
        setInstalledApps(apps);
    };

    useEffect(() => {
        loadInstalled();
    }, []);

    return (
        <div className='bg-[#f7f7f7] mb-4'>
            <h1 className='inter text-4xl font-bold text-center pt-10'>
                Your Installed Apps
            </h1>
            <p className='text-gray-400 text-center'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className='w-[90%] mx-auto my-8'>
                {installedApps.length > 0 ? (
                    installedApps.map(app => (
                        <InstalledAppsList
                            key={app.id}
                            app={app}
                            onUninstall={loadInstalled}
                        />
                    ))
                ) : (
                    <p className='text-center text-gray-500 mt-10'>
                        You have not installed any apps yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Installation;
