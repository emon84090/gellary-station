import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import switalert from './Alert';
import auth from './firebaseconfig';
import Sociallink from './Sociallink';

const Login = () => {
    const [lemail, lsetemail] = useState();
    const [lpassword, lsetpassword] = useState();
    const [spinner, setspinner] = useState(false);

    const [fpassword, fsetpassword] = useState();
    const [forget, setforget] = useState(false);


    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const loginemail = (e) => {
        lsetemail(e.target.value)
    }
    const passwordlogin = (e) => {
        lsetpassword(e.target.value)
    }

    const forgetpassword = (e) => {
        fsetpassword(e.target.value)
    }


    const loginForm = (e) => {
        setspinner(true);
        e.preventDefault();

        signInWithEmailAndPassword(auth, lemail, lpassword)
            .then((res) => {
                setspinner(false)
                switalert('login success', 'success');
                navigate(from, { replace: true });

            })
            .catch((err) => {
                setspinner(false)
                switalert(`${err}`, 'error')

            })


    }

    const forgetPass = (e) => {
        sendPasswordResetEmail(auth, fpassword)
            .then(() => {
                switalert(`reset done,we send password veryfication link on your email:${fpassword}`, 'success')

            })
            .catch((error) => {

                switalert(`user does nor exist or something went wrong`, 'error')
            });

    }

    return (
        <>
            <div className="login-all-content py-11 h-screen w-full bg-yellow-100 px-3">
                <div className="login-content max-w-md mx-auto rounded-md flex items-center h-full justify-center flex-col  bg-white px-2 md:px-10">

                    <div className="logo">
                        <h2 className='text-2xl font-semibold'>Gellary <span className='text-yellow-500'>Station</span></h2>
                    </div>


                    <form onSubmit={loginForm} className='w-full px-2 mt-10'>

                        <div className="input-field mb-3">
                            <input onChange={loginemail} placeholder='Email' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" required />
                        </div>
                        <div className="input-field mb-3">
                            <input onChange={passwordlogin} placeholder='Password' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="password" name="" required />
                        </div>

                        <div className="input-field">

                            <button disabled={spinner} type='submit' className='disabled:bg-opacity-75 disabled:cursor-not-allowed cursor-pointer w-full h-11 outline-none rounded-sm placeholder:text-sm bg-yellow-500   text-white'>{spinner ? <i className='bx bx-loader font-semibold animate-spin text-xl'></i> : 'Sign Up'}</button>
                        </div>


                    </form>
                    <div className="acount-link mt-2 text-center flex justify-between">
                        <div className='flex justify-between'>

                            <button onClick={() => setforget(!forget)} className='text-md font-semibold text-gray-700 underline'>Foget password?</button>
                            <Link className='text-yellow-500 text-md font-semibold capitalize underline ml-6' to="/registration">no acount?</Link>
                        </div>

                    </div>
                    <div className={`forget-div mt-2 transition-all ${forget ? 'max-h-14' : 'max-h-0 overflow-hidden'} `}>


                        <input className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" placeholder='email address' required onChange={forgetpassword} />

                        <button onClick={forgetPass} className='mb-3 text-white rounded-sm text-sm shadow-sm px-2 mt-1 font-semibold capitalize h-9 bg-yellow-500'> reset now</button>


                    </div>
                    <Sociallink></Sociallink>
                </div>

            </div>
        </>
    );
};

export default Login;