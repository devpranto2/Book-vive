import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
   const links=<>
            <Link to={'/'}><li className='mr-2 text-lg font-medium text-gray-600'>Home</li></Link>
            <Link to={'about'}><li className='mr-2 text-lg font-medium text-gray-600'>About</li></Link>
            <Link to={'contact'}><li className='mr-2 text-lg font-medium text-gray-600'>Contact</li></Link>
   </>
    return (
        <div className="navbar">
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
                <Link to={'/'}><a className="p-3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 md:text-xl md:font-bold">Book Vive</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end md:space-x-3">
                <button className='btn rounded-lg bg-green-500 text-white'>Sign In</button>
                <button className='btn rounded-lg bg-sky-500 text-white'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;