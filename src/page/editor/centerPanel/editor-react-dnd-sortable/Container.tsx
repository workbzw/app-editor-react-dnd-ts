import update from 'immutability-helper'
import {FC, useCallback, useContext, useState} from 'react'
import {DragItemViewType, DragType, DropAcceptList} from "../../../../common/editor/DragItemViewType";
import {DragItemViewProvider} from "./DragItemViewProvider";
import MyContext, {ContextData, ItemView} from "../../../../context/context";
import {useDrop} from "react-dnd";

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
    let contextData = useContext<ContextData>(MyContext)
    const [items, setItems] = useState(contextData.itemList)
    const moveItems = useCallback((dragIndex: number, hoverIndex: number) => {
        setItems((prevCards: ItemView[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as Item],
                ],
            }),
        )
    }, [])

    let [, drop] = useDrop(() => ({
        accept: DropAcceptList,
        drop: (item, monitor) => (
            setItems((preList) => {
                    if (contextData.drag.dragType === DragType.Add) {
                        return [...preList, {
                            id: (idData++).toString(),
                            type: contextData.viewType,
                            text: "文字",
                        }]
                    } else if (contextData.drag.dragType === DragType.Adjust) {
                        return preList
                    } else {
                        return preList
                    }
                }
            )
        )
    }))
    const renderItem = useCallback(
        (itemView: ItemView, index: number) => {
            return DragItemViewProvider.of(itemView, index, moveItems)
        }, [],)

    return (
        // <div>数量：{items.length}
        <div ref={drop} style={style}>{items.map((card, i) => renderItem(card, i))}</div>
        // </div>
    )
}
