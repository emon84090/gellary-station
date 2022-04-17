import React, { useEffect, useState } from 'react';
import Showservices from './Showservices';

const Services = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((val) => setData(val))

    }, [])
    return (
        <>
            <section id='services' className='py-16'>
                <h2 className='text-4xl text-center font-semibold text-gray-900'>Our Services</h2>
                <div className="container mx-auto">
                    <div className="services-all-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                        {data.map((val) => <Showservices key={val.id} value={val}></Showservices>)}
                    </div>

                </div>
            </section>



        </>
    );
};

export default Services;