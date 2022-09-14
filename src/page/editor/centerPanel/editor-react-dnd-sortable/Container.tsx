import {FC, useCallback} from 'react'
import {DragItemViewType, DragType, DropAcceptList} from "../../../../common/editor/DragItemViewType";
import {DragItemViewProvider} from "./DragItemViewProvider";
import {ItemView} from "../../../../context/context";
import {useDrop} from "react-dnd";
import {useSelector} from "react-redux";
import {counterActions, RootState, store} from "../../../../store";

const style = {
    width: "100%",
    height: "100%"
}

export interface Item {
    id: string
    type: DragItemViewType
    text: string
    select: boolean
}

export interface Props {
}

export const Container: FC<Props> = () => {
    let idData = 0;
    const state = useSelector((state: RootState) => state);


    let [, drop] = useDrop(() => ({
        accept: DropAcceptList,
        drop: (item, monitor) => {
            if (store.getState().currentDrag.dragType === DragType.Add) {
                store.dispatch(counterActions.addView(
                    {
                        id: (idData++).toString(),
                        type: store.getState().currentDrag.dragViewType,
                        text: state.currentSelect.text,
                    }))
            }
        }
    }))

    const renderItem = useCallback(
        (itemView: ItemView, index: number) => {
            return DragItemViewProvider.of(itemView, index)
        }, [],)

    return (
        // <div>数量：{items.length}
        <div ref={drop} style={style}>{state.itemList.map((itemView, i) => renderItem(itemView, i))}</div>
        // </div>
    )
}
