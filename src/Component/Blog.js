import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="blog-all-content min-h-screen bg-yellow-50">
                <div className="container mx-auto px-3">
                    <div className="blog-content max-w-xl w-full mx-auto ">
                        <div className="blog-list mt-3">
                            <h2 className='text-3xl font-semibold capitalize'>1. Authentication vs. Authorization</h2>
                            <p className='mt-2 capitalize font-normal'>Authorization determines what resources a user can access and Authentication Authorization Authentication verifies who the user is. authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p>
                        </div>
                        <div className="blog-list mt-5">
                            <h2 className='text-3xl font-semibold capitalize'>2. Why are you using firebase?</h2>
                            <p className='mt-2 capitalize font-normal'>Firebase manages all data real-time in the database. So, the exchange of data to and for from the database is easy and quick.if you are looking to develop mobile apps such as live streaming, chat messaging, etc.Password-based authentication,. Single sign-on, Certificate-based authentication,. Token-based authentication,Biometric authentication many kinds of authentication,firebase authentication system is very powerfull</p>
                        </div>

                        <div className="blog-list mt-5">
                            <h2 className='text-3xl font-semibold capitalize'>3. What other services does firebase provide other than authentication</h2>
                            <p className='mt-2 capitalize font-normal'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Blog;