import type {Identifier, XYCoord} from 'dnd-core'
import type {FC} from 'react'
import {useRef} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import {DragItemViewType, DragType} from "../../../../common/editor/DragItemViewType";
import {ItemView} from "../../../../context/context";
import {counterActions, RootState, store} from "../../../../store";
import {useSelector} from "react-redux";

export interface Props {
    itemView: ItemView
    index: number
    children?: any
}

interface DragItem {
    id: string
    index: number
    type: string
}

export const DragItemView: FC<Props> = ({itemView, index, children}) => {
    const ref = useRef<HTMLDivElement>(null)
    const state = useSelector((state: RootState) => state);
    const style = {
        border: state.currentSelect.id === itemView.id ? '1px dashed gray' : '0px dashed gray',
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
            // moveItem(dragIndex, hoverIndex)
            store.dispatch(counterActions.changeIndex({dragIndex: dragIndex, hoverIndex: hoverIndex}))
            item.index = hoverIndex
        },
    })

    const [{isDragging}, drag] = useDrag({
        type: DragItemViewType.Card,
        item: () => {
            return {itemView, index}
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    let handleDrag = () => {
        store.dispatch(counterActions.dragItemView({dragType: DragType.Adjust, dragViewType: itemView.type}))
    }

    let handleClick = () => {
        store.dispatch(counterActions.selectItemView(itemView))
    }
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        // <div>
        //     <div>{contextData.currentSelected.text}</div>
        <div ref={ref} onDrag={handleDrag} onClick={handleClick}
             style={{...style, opacity}}
             data-handler-id={handlerId}>
            {children}
        </div>
        // </div>
    )
}
