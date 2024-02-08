import React from "react";
import { Component } from "react";
import AuthService from "./AuthService";

const AuthContext = React.createContext({
    signinRedirectCallback: () => ({})
});

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
    AuthService;
    constructor(props) {
        super(props);
        this.AuthService = new AuthService();
    }
    render() {
        return <AuthContext.Provider value={this.AuthService}>{this.props.children}</AuthContext.Provider>
    }
}