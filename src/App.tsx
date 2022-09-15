import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";
import {EditorPage} from "./page/editor";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}
export default App;


