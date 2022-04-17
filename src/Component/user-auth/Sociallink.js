import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './firebaseconfig';
import switalert from './Alert';
import { useLocation, useNavigate } from 'react-router-dom';

const Sociallink = () => {

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const provider = new GoogleAuthProvider();

    const siginWithgoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate(from, { replace: true });
            }).catch((error) => {

                switalert(`${error}`, 'error')
            });
    }

    return (
        <>
            <button onClick={siginWithgoogle} className="focus:outline-none  py-3.5 px-4 border rounded-lg border-gray-300 flex items-center w-full mt-10">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google" />
                <p class="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
            </button>

        </>
    );
};

export default Sociallink;