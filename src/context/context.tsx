//创建一个文件，暂且命名为context.js，导出createContext()的返回值
import {createContext} from "react";
import {DragItemViewType, DragType} from "../common/editor/DragItemViewType";

export interface ContextData {
    currentDrag: {
        dragType: DragType;
        dragViewType: DragItemViewType;
    }
    currentSelect: ItemView,
    itemList: ItemView[]
}

export interface ItemView {
    id: string,
    type: DragItemViewType,
    text: string,
}

export default createContext<ContextData>({
    currentDrag: {
        dragType: DragType.Add,
        dragViewType: DragItemViewType.Button,
    },
    currentSelect: {
        id: "string",
        type: DragItemViewType.Button,
        text: "string",
    },
    itemList: []
});