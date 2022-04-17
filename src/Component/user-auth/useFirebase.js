import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import switalert from './Alert';
import auth from './firebaseconfig';

const useFirebase = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser()
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            switalert('logOut success', 'success');
            navigate('/')
        }).catch((error) => {
            switalert('something went wrong', 'error');
        });

    }

    return { user, logOut }
};

export default useFirebase;