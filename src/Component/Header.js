import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from './user-auth/useFirebase';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const { logOut, user } = useFirebase();

    return (
        <>

            <header className='bg-white w-full py-4 sticky top-0 z-10 px-2'>
                <div className="container mx-auto">
                    <div className="header-all-content flex-wrap flex justify-between items-center ">
                        <div className="logo">
                            <Link className='text-2xl font-semibold' to="/">Gellary <span className='text-yellow-500'>Station</span></Link>
                        </div>
                        <div className="menu md:hidden mx-3">
                            <i onClick={() => setMenu(!menu)} className='bx bx-menu text-2xl cursor-pointer'></i>
                        </div>
                        <div className={`header-utilities  md:flex items-center text-center mt-3 md:mt-0 ${!menu ? 'max-h-0 md:max-h-max overflow-hidden' : 'max-h-max'}`}>
                            <div className="header-menu md:mr-5">
                                <ul>
                                    <li><NavLink
                                        className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                        to='/home'
                                    >
                                        Home
                                    </NavLink></li>

                                    <li><a className='font-semibold text-md capitalize' href="home#services">Services</a></li>

                                </ul>

                            </div>

                            <div className="header-link md:flex">
                                {user.uid ? <>
                                    <div className="logout-btn ml-1 mt-3 md:mt-0">
                                        <button onClick={() => logOut()} className='bg-gray-900 w-20 h-10 text-white rounded-3xl font-semibold capitalize'>logout</button>
                                    </div>
                                </> : <>
                                    <div className="signup-btn mt-3 md:mt-0 flex items-center justify-center">

                                        <NavLink
                                            className={({ isActive }) => (`font-semibold  text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                            to='/registration'
                                        >
                                            SignUp
                                        </NavLink>
                                    </div>
                                    <div className="login-btn ml-3 mt-3 md:mt-0">
                                        <button className='bg-gray-900 w-20 h-10 text-white rounded-3xl'><NavLink
                                            className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                            to='/login'
                                        >
                                            Login
                                        </NavLink></button>
                                    </div>
                                </>}

                            </div>
                        </div>
                    </div>

                </div>

            </header>
        </>
    );
};

export default Header;