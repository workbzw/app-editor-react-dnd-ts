import React from "react";
import {LeftPanel} from "./leftPanel";
import {RightPanel} from "./rightPanel";
import "./container.scss"
import {CenterPanel} from "./centerPanel";

interface P {
}

export const EditorPage = (props: P) => {
    let {} = props
    return (
        <div className={"flex-row-space-between app"}>
            <LeftPanel/>
            <CenterPanel/>
            <RightPanel text={""} viewId={"01"} size={20}/>
        </div>
    );
}