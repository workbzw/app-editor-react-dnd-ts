import {FC, useCallback} from 'react'
import {DragType, DropAcceptList} from "../../../common/editor/DragItemViewType";
import {DraggableViewProvider} from "./DraggableViewProvider";
import {ItemView} from "../../../store/GlobalViewData";
import {useDrop} from "react-dnd";
import {useSelector} from "react-redux";
import {counterActions, RootState, store} from "../../../store";
import {random} from "../../../common/Utils";

const style = {
    width: "100%",
    height: "100%"
}

export interface Props {
}

export const Container: FC<Props> = () => {
    const state = useSelector((state: RootState) => state);
    let [, drop] = useDrop(() => ({
        accept: DropAcceptList,
        drop: (item, monitor) => {
            if (store.getState().currentDrag.dragType === DragType.Add) {
                const didDrop = monitor.didDrop()
                if (didDrop) return
                let randomId = random()
                store.dispatch(counterActions.addView(
                    {
                        id: randomId,
                        type: store.getState().currentDrag.dragViewType,
                        text: randomId,
                        fields: []
                    }))
            }
        }
    }))

    const renderItem = useCallback(
        (itemView: ItemView, index: number) => {
            return DraggableViewProvider.of(itemView, index)
        }, [],)

    return (
        <div ref={drop} style={style}>{state.itemList.map((itemView, i) => renderItem(itemView, i))}</div>
    )
}
