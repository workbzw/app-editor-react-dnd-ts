import type {Identifier, XYCoord} from 'dnd-core'
import type {FC} from 'react'
import {useContext, useMemo, useRef, useState} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import {DragItemViewType, DragType} from "../../../../common/editor/DragItemViewType";
import MyContext, {ContextData} from "../../../../context/context";
import SelectIdContext from "../../../../context/SelectIdContext";


export interface Props {
    id: any
    index: number
    select: boolean
    moveItem: (dragIndex: number, hoverIndex: number) => void
    children?: any
}

interface DragItem {
    id: string
    index: number
    select: boolean
    type: string
}

export const DragItemView: FC<Props> = ({id, index, select, moveItem, children}) => {
    const ref = useRef<HTMLDivElement>(null)
    const contextData = useContext<ContextData>(MyContext)
    const selectIdContext = useContext(SelectIdContext)
    const [sContext, setSContext] = useState(selectIdContext);
    const [context, setContext] = useState(contextData);
    console.log("contextData.currentSelected:init:" + contextData.currentSelected)
    const style = {
        // ,
        padding: '0.5rem 0.5rem 0.5rem 0.5rem',
        marginBottom: '.5rem',
        backgroundColor: 'white',
        cursor: 'move',
    }
    const [{handlerId}, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: DragItemViewType.Card,
        collect(monitor) {
            return {handlerId: monitor.getHandlerId()}
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) return
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) return
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return
            moveItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const [{isDragging}, drag] = useDrag({
        type: DragItemViewType.Card,
        item: () => {
            return {id, index}
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    let handleDrag = () => {
        contextData.viewType = DragItemViewType.Card;
        contextData.drag.dragType = DragType.Adjust;
    }


    let handleClick = () => {
        context.currentSelected = id
        setContext(context)
        selectIdContext.id = id
        setSContext(id)
        console.log("contextData.currentSelected:" + sContext.id)
        console.log("contextData.currentSelected:" + sContext.id === id ? '1px dashed gray' : '0px dashed gray')
    }

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))


    return (
        <SelectIdContext.Consumer>{
            value=>
            <div ref={ref} onDrag={handleDrag} onClick={handleClick}
                 style={{
                     ...style,
                     opacity,
                     border: value === id ? '1px dashed gray' : '0px dashed gray'
                 }}

                 data-handler-id={handlerId}>
                {children}
            </div>
        }
        </SelectIdContext.Consumer>
    )
}
