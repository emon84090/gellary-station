import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <>
            <div
                className="
       flex
    items-center
    justify-center
    
    px-2
    h-screen
    bg-gradient-to-r
    from-yellow-100
    to-yellow-100"
            >
                <div className=" max-w-lg w-full py-20 bg-white rounded-md shadow-xl">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-yellow-500 text-9xl">404</h1>

                        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Oops!</span> Page not found
                        </h6>

                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <Link
                            to="/home"
                            class="px-6 py-2 text-sm font-semibold text-black bg-yellow-100"
                        >Go home</Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Notfound;