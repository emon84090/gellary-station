import React from 'react';

const Showservices = (props) => {
    const { sub_title, price, dis, image } = props.value;
    return (
        <>
            <div className="services-items p-4 shadow-2xl rounded-md">
                <div className="services-image">
                    <img className='h-72 object-cover' src={image} alt="" />
                </div>
                <div className="service-dis">
                    <div className="service-inform flex justify-between items-center">
                        <h3 className='text-2xl font-semibold my-3'>{sub_title}</h3>
                        <h2 className='text-center text-2xl font-bold text-yellow-500'><span className='text-sm '>$</span>{price}</h2>
                    </div>

                    <p>{dis}</p>
                </div>

                <div className="buy-btn mt-5">
                    <button className='bg-gray-900 rounded-sm shadow-sm px-10 h-12 font-semibold capitalize text-white'>phurchase now</button>
                </div>
            </div>
        </>
    );
};

export default Showservices;