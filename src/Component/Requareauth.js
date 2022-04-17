import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from './user-auth/useFirebase';

const Requareauth = ({ children }) => {
    const { user } = useFirebase();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default Requareauth;