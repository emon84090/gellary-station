import React from 'react';
import { useParams } from 'react-router-dom';


const Checkout = () => {
    const { id } = useParams();


    return (
        <>
            <div className="checkout-all-content py-10 flex justify-center bg-yellow-50">
                <div className="checkout-details order-2 col-span-12 lg:col-span-8 md:col-span-6 max-w-lg w-full">
                    <h1 className='mb-8 text-3xl font-semibold'>Edit  Details</h1>

                    <form action="">
                        <div className="input-field mb-3">
                            <input readOnly defaultValue="Outdoor Photo Session" className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-800' type="text" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <input readOnly defaultValue="89$" className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-800' type="text" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <input placeholder='Name' className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <input placeholder='phone number' className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <textarea placeholder='add  instructor' className='p-4 resize-none w-full h-24 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' name="" id="" ></textarea>
                        </div>

                        <div className="input-field">
                            <input className=' cursor-pointer w-full h-11 outline-none rounded-sm placeholder:text-sm bg-yellow-500   text-white' type="submit" name="" id="" value="Save & Continue" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;