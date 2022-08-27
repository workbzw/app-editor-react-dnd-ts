import React from "react";
import "./center.scss"
import {HTML5Backend} from "react-dnd-html5-backend";
import Example from "./editor-react-dnd-sortable/example";
import {DndProvider} from "react-dnd";

interface P {
}

export const CenterPanel = () => {
    return (
        <div className={"draw-panel"}>
            <DndProvider backend={HTML5Backend}>
                <Example/>
            </DndProvider>
        </div>
    );
}
