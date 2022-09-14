//创建一个文件，暂且命名为context.js，导出createContext()的返回值
import {createContext} from "react";
import {DragType, DragItemViewType} from "../common/editor/DragItemViewType";

export interface ContextData {
    drag: {
        dragType: DragType;
        dragFrom: number;
        dragTo: number;
    }
    currentSelected: ItemView,
    viewType: DragItemViewType;
    itemList: ItemView[]
}

export interface ItemView {
    id: string,
    type: DragItemViewType,
    text: string,
}

export default createContext<ContextData>({
    drag: {
        dragType: DragType.Add,
        dragFrom: 0,
        dragTo: 0,
    },
    currentSelected: {
        id: "string",
        type: DragItemViewType.Button,
        text: "string",
    },
    viewType: DragItemViewType.Text,
    itemList: []
});