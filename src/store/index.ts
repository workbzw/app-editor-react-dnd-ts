import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {DragItemViewType, DragType} from "../common/editor/DragItemViewType";
import {ItemView} from "../context/context";
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

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        currentDrag: {
            dragType: DragType.Add,
            dragViewType: DragItemViewType.Text,
        },
        currentSelect: {
            id: "string",
            type: DragItemViewType.Button,
            text: "string",
        },
        itemList: [{
            id: "string",
            type: DragItemViewType.Button,
            text: "string",
        }]
    },
    reducers: {
        addView: (state, action: PayloadAction<ItemView>) => {
            state.itemList.push(action.payload)
        },
        moveToIndex: (state, action: PayloadAction<ChangeIndexParam>) => {
            // const [items, setItems] = useState(state.itemList)
            // update(prevCards, {
            //     $splice: [
            //         [dragIndex, 1],
            //         [hoverIndex, 0, prevCards[dragIndex] as Item],
            //     ],
            // })
            state.itemList.splice(action.payload.dragIndex, 1)
            state.itemList.splice(action.payload.hoverIndex, 0, action.payload.itemView)
        },
        insertIntoIndex: (state, action: PayloadAction<InsertByIndex>) => {
            state.itemList.splice(action.payload.index, 0,action.payload.itemView)
        },
        selectItemView: (state, action: PayloadAction<ItemView>) => {
            state.currentSelect = action.payload;
        },
        setItemViewText: (state, action: PayloadAction<ChangeTextParam>) => {
            state.currentSelect.text = action.payload.text;
            for (let i = 0; i < state.itemList.length; i++) {
                if (state.itemList[i].id === action.payload.id) {
                    state.itemList[i].text = action.payload.text
                    break;
                }
            }
        },
        setItemView: (state, action: PayloadAction<ItemView>) => {
            state.currentSelect = action.payload;
        },
        dragItemView: (state, action: PayloadAction<DragItemView>) => {
            state.currentDrag.dragType = action.payload.dragType
            state.currentDrag.dragViewType = action.payload.dragViewType
        }
    }
})

export const store = configureStore({
    reducer: counterSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>
export const counterActions = counterSlice.actions;
// 可以订阅 store
// store.subscribe(() => console.log(store.getState()))
// 将我们所创建的 action 对象传递给 `dispatch`
// store.dispatch(addView)
// {value: 1}