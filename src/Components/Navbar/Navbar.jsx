import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import NavbarIcon from '/public/images/NavbarIcon.png';
import { useState } from 'react';

const Navbar = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!NavbarOpen);
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.hidden = !NavbarOpen;
        }
    }
    return (
        <>
            <nav className="relative bg-white-100 border-b pb-2 animation">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex shrink-0 items-center">
                            <img src={NavbarIcon} alt="Your Company" className="h-8 w-auto " />
                            <p className='text-black text-lg font-medium mx-2'>ARS</p>
                        </div>

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-3 justify-center ">
                                    <Link to="/" aria-current="page" className="rounded-md text-white  px-3 py-2 text-sm font-medium hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700 text-black">Home</Link>
                                    <Link to="/AboutUs" className="rounded-md px-3 py-2 text-sm text-white font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700">About</Link>
                                    <Link to="/Services" className="rounded-md px-3 py-2 text-sm text-white font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700">Service</Link>
                                    <Link to="/Projects" className="rounded-md px-3 py-2 text-sm text-white font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700">Project</Link>
                                    <Link to="https://www.linkedin.com/in/abdul-rehman-shafiq-241336322/" target='_blank' className=" px-5 py-2 w-32  font-medium text-white bg-gray-700 hover:bg-gray-500">Contact Me</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-4 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" onClick={toggleNavbar}>
                                <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                                    <span className="absolute -inset-0.5  border-2 border-indigo-500" ></span>
                                    <span className="sr-only">Open main menu</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                                        <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <el-dropdown className="relative ml-3">
                                <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</a>
                                </el-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
                <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                       <Link to="/" aria-current="page" className="block rounded-md text-black  px-3 py-2 text-sm font-medium hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 focus:w-17 focus:text-center hover:bg-gray-700 text-black">Home</Link>
                                    <Link to="/AboutUs" className="block rounded-md px-3 py-2 text-sm text-black font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 focus:w-17 focus:text-center hover:bg-gray-700">About</Link>
                                    <Link to="/Services" className="block rounded-md px-3 py-2 text-sm text-black font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 focus:w-17 focus:text-center hover:bg-gray-700">Service</Link>
                                    <Link to="/Projects" className="block rounded-md px-3 py-2 text-sm text-black font-medium text-black hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 focus:w-17 focus:text-center hover:bg-gray-700">Project</Link>
                                    <Link to="https://www.linkedin.com/in/abdul-rehman-shafiq-241336322/" target='_blank' className=" block rounded-md px-3 py-2 text-sm text-black font-medium text-black focus:w-32 hover:text-white focus:text-center focus:outline-none focus:text-white focus:bg-gray-700 hover:bg-gray-700">Contact Me</Link>
                    </div>
                </el-disclosure>
            </nav>
        </>
    );

}
export default Navbar;
