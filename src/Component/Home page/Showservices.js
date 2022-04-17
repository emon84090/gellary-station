import React from 'react';
import { useNavigate } from 'react-router-dom';

const Showservices = (props) => {
    const navigate = useNavigate();
    const { sub_title, price, dis, image, id } = props.value;
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
                    <button onClick={() => { navigate(`/checkout/${id}`) }} className='bg-gray-900 rounded-sm group flex justify-center items-center shadow-sm px-10 h-12 font-semibold capitalize text-white'>phurchase now  <i className='bx bxs-chevron-right group-hover:ml-3 transition-all ml-1 text-xl'></i></button>



                </div>
            </div>
        </>
    );
};

export default Showservices;