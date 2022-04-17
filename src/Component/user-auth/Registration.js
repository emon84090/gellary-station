import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import switalert from './Alert';
import auth from './firebaseconfig';

import Sociallink from './Sociallink';

const Registration = () => {

    const navigate = useNavigate();
    const [spinner, setspinner] = useState(false);

    const [email, setmail] = useState({
        value: '',
        error: ''
    });

    const [password, setpassword] = useState({
        value: '',
        error: ''
    });

    const [confirmpass, setconfirmpass] = useState({
        value: '',
        error: ''
    });


    const handlemail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setmail({ value: emailInput, error: "" });
        } else {
            setmail({ value: "", error: "Please Provide a valid Email" });
        }

    }
    const handlpassword = (event) => {
        const passwordInput = event.target.value;
        if (passwordInput.length < 7) {
            setpassword({
                value: '',
                error: "password must be 6 letter"
            })
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
            setpassword({
                value: '',
                error: "password must contain capital letter"
            })
        } else {
            setpassword({
                value: passwordInput,
                error: ""
            })

        }

    }

    const handlconfirmpassword = (event) => {
        const confirmpasswordInput = event.target.value;
        if (confirmpasswordInput !== password.value) {
            setconfirmpass({
                error: 'password not matched',
                value: ''
            })

        } else {
            setconfirmpass({
                error: '',
                value: confirmpasswordInput
            })
        }

    }


    const signupForm = (event) => {
        event.preventDefault();
        if (email.value && password.value) {
            if (password.value !== confirmpass.value) {
                switalert('password not match', 'error')
            } else {
                setspinner(true)
                createUserWithEmailAndPassword(auth, email.value, password.value)
                    .then((res) => {

                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                setspinner(false);
                                switalert('registration successfully,Check your email for active acount', 'success');
                                navigate('/login')

                            });
                    })
                    .catch((err) => {
                        switalert(`${err}`, 'error')
                        setspinner(false)
                    })
            }

        }

    }



    return (
        <>
            <div className="registration-all-content py-11 h-screen w-full bg-yellow-100 px-3">
                <div className="registration-content max-w-md w-full mx-auto  rounded-md  flex items-center h-full justify-center flex-col bg-white px-2 md:px-10">
                    <div className="logo">
                        <h2 className='text-2xl font-semibold'>Gellary <span className='text-yellow-500'>Station</span></h2>
                    </div>

                    <form onSubmit={signupForm} className='w-full px-2 mt-8'>

                        <div className="input-field mb-3">
                            <input onChange={handlemail} placeholder='Email' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" required />
                        </div>
                        <div className="input-field mb-1">
                            <input onChange={handlpassword} placeholder='Password' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="password" name="" required />
                        </div>
                        <div className="error mb-2">
                            {password.error && (<p className='text-sm font-semibold text-red-500'>{password.error}</p>)}
                        </div>
                        <div className="input-field mb-1">
                            <input onChange={handlconfirmpassword} placeholder='Confirm password' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="password" name="" required />
                        </div>
                        <div className="error mb-2">
                            {confirmpass.error && (<p className='text-sm font-semibold text-red-500'>{confirmpass.error}</p>)}
                        </div>

                        <div className="input-field">

                            <button disabled={spinner} type='submit' className='disabled:bg-opacity-75 disabled:cursor-not-allowed cursor-pointer w-full h-11 outline-none rounded-sm placeholder:text-sm bg-yellow-500   text-white'>{spinner ? <i className='bx bx-loader font-semibold animate-spin text-xl'></i> : 'Sign Up'}</button>
                        </div>
                        <div className="acount-link mt-2 text-center">
                            <Link to="/login" className='text-yellow-500 font-semibold'>Already have acount?</Link>
                        </div>

                    </form>

                    <Sociallink></Sociallink>

                </div>

            </div>

        </>
    );
};

export default Registration;