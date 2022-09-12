import React, {useState} from "react";
import {LeftPanel} from "./leftPanel";
import {RightPanel} from "./rightPanel";
import "./container.scss"
import {CenterPanel} from "./centerPanel";
import MyContext, {ContextData} from "../../context/context";
import {DragItemViewType, DragType} from "../../common/editor/DragItemViewType";

interface P {
}

export const EditorPage = (props: P) => {
    let {} = props
    return (
        <MyContext.Provider value={{
            drag: {
                dragType: DragType.Add,
                dragFrom: 0,
                dragTo: 0,
            },
            currentSelected: "",
            viewType: DragItemViewType.Text,
            itemList: []
        }}>
            <div className={"flex-row-space-between app"} >
                <LeftPanel/>
                <CenterPanel/>
                <RightPanel text={""} viewId={"01"} size={20}/>
            </div>
        </MyContext.Provider>
    );
}