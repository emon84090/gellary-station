import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-all-content h-screen px-2 bg-yellow-50 ">
                <div className="container mx-auto">
                    <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-4 py-18  ">
                        <div className="about-left overflow-hidden ">
                            <img className='max-h-96 max-w-xs w-full  rounded-md shadow-md max-w-sm w-full object-cover' src="https://i.ibb.co/XzJsJM5/my.jpg" alt="" />
                        </div>
                        <div className="about-right ">
                            <h2 className='text-3xl font-semibold mb-3 capitalize'>Hello, my name is Jahirul islam Emon</h2>
                            <p className='text-md text-gray-600 font-semibold capitalize'>I Have Been Designing And Developing Website For 1 year.i try my best to learn web design. daily i am working 7 hours for learning . if i work hard one day i will be success.so i can't waste my time . i have learned html,css,bootstrap,tailwind css, simple javascript , react js.</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default About;