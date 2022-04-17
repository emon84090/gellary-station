import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-900 py-5 text-white '>
                <div className="container mx-auto px-5">
                    <div className="footer-all-content mt-5 grid grid-cols-12 mx-5">
                        <div className="footer-left col-span-12 md:col-span-8 mt-4">
                            <div className="logo">
                                <h2 className='text-2xl font-semibold'>Gellary <span className='text-yellow-500'>Station</span></h2>
                            </div>

                        </div>
                        <div className="footer-right col-span-12 md:col-span-4">
                            <div className="footer-right-content flex md:justify-between flex-col md:flex-row">
                                <div className="footer-right-left mt-4">
                                    <ul>
                                        <li>About Gellary Station</li>
                                        <li>Read Our Blog</li>
                                        <li>Sign up to hire</li>


                                    </ul>
                                </div>
                                <div className="footer-right-right mt-4">
                                    <ul>
                                        <li>Get help</li>
                                        <li>Read FAQs</li>
                                        <li>View all gellary</li>


                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="footer-bottom mt-5 md:mt-16 md:flex justify-between mx-4">
                        <div className="footer-b-left ">
                            <p>copyright © 2022 gellary station</p>
                        </div>
                        <div className="footer-b-right">
                            <ul className='md:flex'>
                                <li className='mr-4'>Privacy Policy</li>
                                <li className='mr-4'>Terms Of Use</li>
                                <li className='mr-4'>Pricing</li>
                            </ul>
                        </div>

                    </div>

                </div>



            </footer>
        </>
    );
};

export default Footer;