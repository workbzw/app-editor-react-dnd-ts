import update from 'immutability-helper'
import type {FC} from 'react'
import {useCallback, useContext, useState} from 'react'
import {DragType, DropAcceptList, EditableType} from "../../../../common/editor/EditableType";
import {EditableViewProvider} from "./EditableViewProvider";
import MyContext, {ContextData} from "../../../../context/context";
import {useDrop} from "react-dnd";

const style = {
    width: "100%",
    height: "100%"
}

export interface Item {
    id: number
    type: EditableType
    select: boolean
}

export interface ContainerState {
    cards: Item[]
}

export const Container: FC = () => {
    let contextData = useContext<ContextData>(MyContext)
    const [cards, setCards] = useState(contextData.itemList)
    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setCards((prevCards: Item[]) =>
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
            setCards((preList) => {
                    if (contextData.drag.dragType === DragType.Add) {
                        return [...preList, {id: 9, type: contextData.viewType, select: false}]
                    } else if (contextData.drag.dragType === DragType.Adjust) {
                        return preList
                    } else {
                        return preList
                    }
                }
            )
        )
    }))
    const renderCard = useCallback(
        (card: { id: number; type: EditableType; select: boolean; }, index: number) => {
            return (EditableViewProvider.of(card.id, card.type, card.select, index, moveCard))
        }, [],)

    return (
        <>
            <div ref={drop} style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        </>
    )

}
