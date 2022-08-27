import React from "react";
import './login.scss';
import {Navigate} from "react-router-dom";


interface LoginProps {
    title: string
}

interface LoginState {
    nav: string;
}


class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps | Readonly<LoginProps>) {
        super(props);
        this.state = {nav: ""}
    }

    render() {
        return (
            <div className="page-login">
                {this.state.nav !== "" ? <Navigate to={this.state.nav} replace={true}/> : <div/>}
                <h1>Login Page</h1>
                <button onClick={() => this.setState({nav: "/home"})}>去首页</button>
            </div>
        );
    }
}

export default Login