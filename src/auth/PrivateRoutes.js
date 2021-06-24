import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAutheticated } from './authhelpercalls';

const PrivateRoutes = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAutheticated() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoutes;