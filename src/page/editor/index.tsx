import React, {useState} from "react";
import {LeftPanel} from "./leftPanel";
import {RightPanel} from "./rightPanel";
import "./container.scss"
import {CenterPanel} from "./centerPanel";
import {DragItemViewType, DragType} from "../../common/editor/DragItemViewType";
import MyContext from '../../../src/context/context'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

interface P {
}

export const EditorPage = (props: P) => {
    let {} = props
    const [itemData, setItemData] = useState({
        drag: {
            dragType: DragType.Add,
            dragFrom: 0,
            dragTo: 0,
        },

        currentSelected: {
            id: "",
            type: DragItemViewType.Button,
            text: "eeeeee",
        },
        viewType: DragItemViewType.Text,
        itemList: []
    })
    return (
        <MyContext.Provider value={itemData}>
            <div className={"flex-row-space-between app"}>
                <LeftPanel/>
                <DndProvider backend={HTML5Backend}>
                <CenterPanel/>
                </DndProvider>
                <RightPanel itemView={itemData.currentSelected}/>
            </div>
        </MyContext.Provider>
    );
}