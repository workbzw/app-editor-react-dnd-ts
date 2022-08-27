import React from 'react';
import {Navigate} from "react-router-dom";
import './home.scss';

interface HomeProps {
    title: string
}

interface HomeState {
    nav: string
}


class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps | Readonly<HomeProps>) {
        super(props);
        this.state = {nav: ""}
    }

    render() {
        return (
            <div className="page-home">
                {this.state.nav !== "" ? <Navigate to={this.state.nav}/> : <div/>}
                <h1>Home Page</h1>
                <button onClick={() => this.setState({nav: "/login"})}>去登录</button>
                <button onClick={() => this.setState({nav: "/canvas"})}>去画布</button>
            </div>
        );
    }
}

export default Home
