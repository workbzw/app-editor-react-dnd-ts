import React from "react";
import {LeftPanel} from "./leftPanel";
import {RightPanel} from "./rightPanel";
import "./container.scss"
import {CenterPanel} from "./centerPanel";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

interface P {
}

export const EditorPage = (props: P) => {
    let {} = props
    return (
        <div className={"flex-row-space-between app"}>
            <LeftPanel/>
            <DndProvider backend={HTML5Backend}>
                <CenterPanel/>
            </DndProvider>
            <RightPanel/>
        </div>
    );
}