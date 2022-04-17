import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import switalert from './Alert';
import auth from './firebaseconfig';
import Sociallink from './Sociallink';

const Login = () => {
    const [lemail, lsetemail] = useState();
    const [lpassword, lsetpassword] = useState();
    const [spinner, setspinner] = useState(false);

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const loginemail = (e) => {
        lsetemail(e.target.value)
    }
    const passwordlogin = (e) => {
        lsetpassword(e.target.value)
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
                        <div className="acount-link mt-2 text-center flex justify-between">

                            <Link to="/registration" className='text-yellow-500 underline font-semibold'>Not acount?</Link>
                        </div>


                    </form>
                    <Sociallink></Sociallink>
                </div>

            </div>
        </>
    );
};

export default Login;