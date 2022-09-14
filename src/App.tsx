import React, {Fragment, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";
import {EditorPage} from "./page/editor";

import {DragItemViewType, DragType} from "./common/editor/DragItemViewType";
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from 'redux'
import {configureStore} from "@reduxjs/toolkit";
import {store} from "./store";

type Action = {
    type: string
}
type State = {
    value: number
}

function App() {


    // Create a "reducer" function that determines what the new state
// should be when something happens in the app
    function counterReducer(state: State, action: Action) {
        // Reducers usually look at the type of action that happened
        // to decide how to update the state
        switch (action.type) {
            case 'counter/incremented':
                return {...state, value: state.value + 1}
            case 'counter/decremented':
                return {...state, value: state.value - 1}
            default:
                // If the reducer doesn't care about this action type,
                // return the existing state unchanged
                return state
        }
    }


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


