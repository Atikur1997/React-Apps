import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Link, Links } from 'react-router';
import logo from '../../assets/logo.png';

const NavBar = () => {
    const links = (
        <>
            <Link
                to="/"
                className="mr-4 pb-1 border-b-2 border-transparent hover:border-[#632ee3] hover:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] hover:bg-clip-text hover:text-transparent transition-all duration-1000 ease-in-out"
            >
                Home
            </Link>

            <Link
                to="/apps"
                className="mr-4 pb-1 border-b-2 border-transparent hover:border-[#632ee3] hover:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] hover:bg-clip-text hover:text-transparent transition-all duration-1000 ease-in-out"
            >
                Apps
            </Link>
            <Link
                to="/installation"
                className="mr-4 pb-1 border-b-2 border-transparent hover:border-[#632ee3] hover:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] hover:bg-clip-text hover:text-transparent transition-all duration-1000 ease-in-out"
            >
                Installation
            </Link>
        </>
    );


    return (
        <div className='mb-3'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }

                        </ul>
                    </div>
                    <Link to="/"><a className="btn btn-ghost bg-transparent text-xl" ><img src={logo} className='w-[30px] h-[30px]' /> <span className='bg-[linear-gradient(125.07deg,_#632ee3,_#9f62f2)] bg-clip-text text-transparent'>HERO.IO</span></a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn inter text-white bg-[linear-gradient(125.07deg,_#632ee3,_#9f62f2)] " href='https://github.com/Atikur1997' target='_blank' ><FaGithub />Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;