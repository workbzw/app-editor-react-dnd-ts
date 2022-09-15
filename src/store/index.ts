import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {DragItemViewType, DragType} from "../common/editor/DragItemViewType";
import {ItemView, ItemViewFieldType} from "./GlobalViewData";
import {random} from "../common/Utils";

export type ChangeIndexParam = {
    dragIndex: number;
    hoverIndex: number;
    itemView: ItemView;
}
export type ChangeTextParam = {
    text: string;
    id: string;
}
export type InsertByIndex = {
    index: number;
    itemView: ItemView;
}
export type DragItemView = {
    dragType: DragType;
    dragViewType: DragItemViewType;
}

const viewSlice = createSlice({
    name: 'view',
    initialState: {
        currentDrag: {
            dragType: DragType.Add,
            dragViewType: DragItemViewType.Text,
        },
        currentSelect: {
            id: "string",
            type: DragItemViewType.Button,
            text: "string",
            fields: [
                {
                    id: random(),
                    name: "内容",
                    value: "string2",
                    type: ItemViewFieldType.Input
                }, {
                    id: random(),
                    name: "高度",
                    value: "string2",
                    type: ItemViewFieldType.Input
                }]
        },
        itemList: [{
            id: "string",
            type: DragItemViewType.Button,
            text: "string",
            fields: [{id: random(), name: "内容", value: "我是内容", type: ItemViewFieldType.Input}]
        }]
    },
    reducers: {
        addView: (state, action: PayloadAction<ItemView>) => {
            //新增控件
            state.itemList.push(action.payload)
        },
        moveToIndex: (state, action: PayloadAction<ChangeIndexParam>) => {
            //删除当前拖拽控件
            state.itemList.splice(action.payload.dragIndex, 1)
            //插入至悬停位置
            state.itemList.splice(action.payload.hoverIndex, 0, action.payload.itemView)
        },
        insertIntoIndex: (state, action: PayloadAction<InsertByIndex>) => {
            //插入至悬停位置
            state.itemList.splice(action.payload.index, 0, action.payload.itemView)
        },
        selectItemView: (state, action: PayloadAction<ItemView>) => {
            //选中view
            state.currentSelect = action.payload;
        },
        setItemViewText: (state, action: PayloadAction<ChangeTextParam>) => {
            //改变文字
            state.currentSelect.text = action.payload.text;
            for (let i = 0; i < state.itemList.length; i++) {
                if (state.itemList[i].id === action.payload.id) {
                    state.itemList[i].text = action.payload.text
                    break;
                }
            }
        },
        dragItemView: (state, action: PayloadAction<DragItemView>) => {
            //被拖拽控件的拖拽目的(新增、排序)、拖拽控件类型
            state.currentDrag.dragType = action.payload.dragType
            state.currentDrag.dragViewType = action.payload.dragViewType
        }
    }
})

export const store = configureStore({
    reducer: viewSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>
export const counterActions = viewSlice.actions;
// 可以订阅 store
// store.subscribe(() => console.log(store.getState()))
