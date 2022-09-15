//创建一个文件，暂且命名为context.js，导出createContext()的返回值
import {DragItemViewType, DragType} from "../common/editor/DragItemViewType";

export interface ViewsData {
    currentDrag: {
        dragType: DragType;//拖拽类型：新增、排序
        dragViewType: DragItemViewType;//拖拽组件类型：文字、图片、按钮...
    }
    currentSelect: ItemView,//当前选择
    itemList: ItemView[]//组件列表
}

export interface ItemView {
    id: string,
    type: DragItemViewType,
    text: string,
    fields: ItemViewField[]
}

export interface ItemViewField {
    id: string,
    name: string,
    type: ItemViewFieldType,
    value: string
}

export enum ItemViewFieldType {
    Input = "Input",
    Selector = "Selector",
}
