//创建一个文件，暂且命名为context.js，导出createContext()的返回值
import {createContext} from "react";
import {DragType, EditableType} from "../common/editor/EditableType";

export interface ContextData {
    drag: {
        dragType: DragType;
        dragFrom: number;
        dragTo: number;
    }
    viewType: EditableType;
    itemList: ItemView[]
}

export interface ItemView {
    id: number,
    type: EditableType,
    select: boolean
}

export default createContext<ContextData>({
    drag: {
        dragType: DragType.Add,
        dragFrom: 0,
        dragTo: 0,
    },
    viewType: EditableType.Text,
    itemList: []
});