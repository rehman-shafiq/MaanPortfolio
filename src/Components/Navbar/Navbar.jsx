import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import NavbarIcon from '/public/images/NavbarIcon.png';
import { useState } from 'react';

const Navbar = () => {

    return (
        <>
            <nav className="bg-white-100 border-b pb-2">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex shrink-0 items-center">
                            <img src={NavbarIcon} alt="Your Company" className="h-8 w-auto" />
                            <p className='text-black text-lg font-medium'>ARS</p>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="sm:ml-6 sm:block">
                                <div className="flex space-x-6 justify-center">
                                    <Link to="/" aria-current="page" className="rounded-md  px-3 py-2 text-sm font-medium hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700 text-black">Home</Link>
                                    <Link to="/AboutUs" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700">About</Link>
                                    <Link to="/Services" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700">Service</Link>
                                    <Link to="/Projects" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700">Project</Link>
                                    <Link to="https://www.linkedin.com/in/abdul-rehman-shafiq-241336322/" target='_blank' className=" px-5 py-2 w-32  font-medium text-white bg-gray-700 hover:bg-gray-500">Contact Me</Link>
                                    {/*<button className=" px-5 py-2 w-32  font-medium text-white bg-gray-700 hover:bg-gray-500" onClick={props.toggleSite}> Hide Site </button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );

}
export default Navbar;
