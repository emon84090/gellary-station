import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='bg-white w-full py-4 sticky top-0'>
                <div className="container mx-auto">
                    <div className="header-all-content flex-wrap flex justify-between items-center ">
                        <div className="logo">
                            <Link className='text-2xl font-semibold' to="/">Gellary <span className='text-yellow-500'>Station</span></Link>
                        </div>
                        <div className="header-menu">
                            <ul>
                                <li><NavLink
                                    className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                    to='/home'
                                >
                                    Home
                                </NavLink></li>

                                <li><NavLink
                                    className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                    to='/ser'
                                >
                                    services
                                </NavLink></li>

                                <li><NavLink
                                    className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                    to='/contact'
                                >
                                    Contact
                                </NavLink></li>

                            </ul>

                        </div>

                        <div className="header-link flex">
                            <div className="signup-btn ">
                                <button className='bg-gray-900 w-20 h-10 text-white rounded-md'><Link className='h-full font-semibold justify-center flex items-center' to="/registration">Sign Up</Link></button>
                            </div>
                            <div className="login-btn ml-3">
                                <button className='bg-gray-900 w-20 h-10 text-white rounded-md'><Link className='h-full font-semibold justify-center flex items-center' to="/login">Login</Link></button>
                            </div>
                        </div>
                    </div>

                </div>

            </header>
        </>
    );
};

export default Header;