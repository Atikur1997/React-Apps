import React from "react";
import { FaStar, FaDownload } from "react-icons/fa6";
import { removeFromStoredDB } from "../../Utility/addToDB";

const InstalledAppsList = ({ app, onUninstall }) => {
    const { image, title, downloads, ratingAvg, companyName, size, id } = app;

    const handleUninstall = () => {
        removeFromStoredDB(id);
        onUninstall(); // Refresh the list in parent (Installation.jsx)
    };

    return (
        <div className="flex justify-between my-4 py-4 shadow-md items-center px-4">
            <div className="flex justify-space gap-4">
                <div>
                    <img className="w-[80px] h-[80px] rounded-md" src={image} />
                </div>
                <div>
                    <h1 className="text-xl font-semibold">
                        {title} : {companyName}
                    </h1>
                    <div className="flex justify-between gap-14 mt-3">
                        <p className="flex gap-3 items-center inter bg-[#f1f5e8] px-3 py-1 rounded-md text-[#00d390]">
                            <FaDownload /> {(downloads / 1000000).toFixed(2)}M
                        </p>
                        <p className="flex gap-3 items-center inter bg-[#fff0e1] px-3 text-[#ff8811] font-semibold rounded-md">
                            <FaStar /> {ratingAvg}
                        </p>
                        <p className="inter text-gray-400">{size}MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleUninstall} className="btn btn-error text-white">
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstalledAppsList;
