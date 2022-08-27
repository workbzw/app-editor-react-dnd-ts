import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './common/scss/frame.scss';
import MyContext from "./context/context"
import {DragType, EditableType} from "./common/editor/EditableType";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MyContext.Provider value={{
            drag: {
                dragType: DragType.Add,
                dragFrom: 0,
                dragTo: 0,
            },
            viewType: EditableType.Text,
            itemList: [
                // {id: 0, type: EditableType.Banner, select: false},
                // {id: 1, type: EditableType.List, select: false},
                // {id: 2, type: EditableType.Button, select: false},
                // {id: 3, type: EditableType.Input, select: false},
            ]
        }}>
            <App/>
        </MyContext.Provider>
    </React.StrictMode>
);