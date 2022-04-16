import React from 'react';
import { Link } from 'react-router-dom';
import Sociallink from './Sociallink';

const Registration = () => {
    return (
        <>
            <div className="registration-all-content py-11 h-screen w-full bg-yellow-100 px-3">
                <div className="registration-content max-w-md w-full mx-auto  rounded-md  flex items-center h-full justify-center flex-col bg-white px-2 md:px-10">
                    <div className="logo">
                        <h2 className='text-2xl font-semibold'>Gellary <span className='text-yellow-500'>Station</span></h2>
                    </div>

                    <form action="" className='w-full px-2 mt-8'>

                        <div className="input-field mb-3">
                            <input placeholder='Email' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <input placeholder='Password' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="password" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <input placeholder='Confirm password' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="password" name="" id="" />
                        </div>
                        <div className="input-field">
                            <input className=' cursor-pointer w-full h-11 outline-none rounded-sm placeholder:text-sm bg-yellow-500   text-white' type="submit" name="" id="" value="Sign Up" />
                        </div>
                        <div className="acount-link mt-2 text-center">
                            <Link to="/login" className='text-yellow-500 font-semibold'>Already have acount?</Link>
                        </div>


                    </form>

                    <Sociallink></Sociallink>



                </div>

            </div>

        </>
    );
};

export default Registration;