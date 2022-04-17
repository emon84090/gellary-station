import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="banner-all-content flex items-center py-16">
                <div className="container mx-auto h-full px-1 ">
                    <div className="banner-content grid grid-cols-12 place-content-center h-full">
                        <div className="banner-left col-span-12 md:col-span-5 order-2 mt-4">
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold capitalize '>Hello i am Arif Khan , i am professional photographer</h2>

                            <p className='mt-5 text-gray-700 bg-opacity-70 text-md capitalize font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolore culpa quas, iste, maxime laudantium ex aliquid </p>

                            <button className='w-40 h-12 bg-gray-900 mt-10 rounded-sm text-white font-semibold shadow-sm'>Contact Me</button>
                        </div>
                        <div className="banner-right col-span-12 md:col-span-7  order-1 md:order-3">
                            <img src="https://i.ibb.co/nszqbRp/young-active-male-traveler-takes-photo-with-retro-camera-dressed-hat-raincoat-as-travels-during-rain.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;