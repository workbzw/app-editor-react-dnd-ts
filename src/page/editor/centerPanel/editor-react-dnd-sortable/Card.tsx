import type {Identifier, XYCoord} from 'dnd-core'
import type {FC} from 'react'
import {useContext, useRef, useState} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import {DragType, EditableType} from "../../../../common/editor/EditableType";
import MyContext, {ContextData, ItemView} from "../../../../context/context";


export interface CardProps {
    id: any
    index: number
    select: boolean
    moveCard: (dragIndex: number, hoverIndex: number) => void
    children?: any
}

interface DragItem {
    id: string
    index: number
    select: boolean
    type: string
}

export const Card: FC<CardProps> = ({id, index, select, moveCard, children}) => {
    const ref = useRef<HTMLDivElement>(null)
    let contextData = useContext<ContextData>(MyContext)
    let [selected, setSelected] = useState<boolean>(select)
    let [list, setList] = useState<ItemView[]>(contextData.itemList)
    const style = {
        border: selected ? '1px dashed gray' : '0px dashed gray',
        padding: '0.5rem 0.5rem 0.5rem 0.5rem',
        marginBottom: '.5rem',
        backgroundColor: 'white',
        cursor: 'move',
    }
    const [{handlerId}, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: EditableType.Card,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })

    const [{isDragging}, drag] = useDrag({
        type: EditableType.Card,
        item: () => {
            return {id, index}
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    let handleDrag = () => {
        contextData.viewType = EditableType.Card;
        contextData.drag.dragType = DragType.Adjust;
    }

    let handleClick = () => {
        // setList((prevList: Item[]) =>
        //     update(prevList, {
        //         $splice: [prevList.]
        //         ],
        //     }),
        // )
        setList((preList) => preList.map(e => {
            return {...e, select: false}
        }))
        setSelected(!selected)
    }

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div ref={ref} onDrag={handleDrag} onClick={handleClick} style={{...style, opacity}}
             data-handler-id={handlerId}>
            {children}
        </div>
    )
}
