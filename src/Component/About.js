import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-all-content h-screen px-2">
                <div className="container mx-auto">
                    <div className="about-content grid grid-cols-12 gap-9 py-10 mt-3 ">
                        <div className="about-left overflow-hidden  col-span-12 md:col-span-6 lg:col-span-5">
                            <img className='max-h-96  rounded-md shadow-md max-w-sm w-full object-cover' src="https://i.ibb.co/XzJsJM5/my.jpg" alt="" />
                        </div>
                        <div className="about-right col-span-12 md:col-span-6 lg:col-span-7">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita minima quia hic tenetur architecto molestiae amet reprehenderit a harum animi saepe perspiciatis deleniti numquam, id voluptatum eveniet quisquam quibusdam consequuntur.
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default About;