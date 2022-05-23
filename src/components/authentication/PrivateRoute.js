import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticate';

const PrivateRoute = (props) => {
    return isAuthenticated() ? props.children : < Navigate to = "/login" /> ;
};

export default PrivateRoute;