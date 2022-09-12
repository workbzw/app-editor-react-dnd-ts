import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './common/scss/frame.scss';

import {DragType, DragItemViewType} from "./common/editor/DragItemViewType";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);