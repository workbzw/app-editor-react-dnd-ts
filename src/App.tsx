import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";
import {EditorPage} from "./page/editor";

function App() {

    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home title={"首页"}/>}/>
                    <Route path="/home" element={<Home title={"首页"}/>}/>
                    <Route path="/login" element={<Login title={"登录页"}/>}/>
                    <Route path="/canvas" element={<EditorPage/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;


