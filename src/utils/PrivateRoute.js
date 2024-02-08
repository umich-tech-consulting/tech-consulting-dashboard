import React from "react";
import { Route } from "react-router-dom";
import { AuthConsumer } from "./AuthProvider";

const PrivateRoute = ({ component, ...rest }) => {
    const renderFn = (Component) => (props) => (
        <AuthConsumer>
            {({isAuthenticated, signinRedirect}) => {
                if (!!Component && isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    signinRedirect();
                    return <span>laoding</span>
                }
            }}
        </AuthConsumer>
    );
    return <Route {...rest} render={renderFn(component)} />;
}

export default PrivateRoute