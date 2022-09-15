import type {Identifier} from 'dnd-core'
import type {FC} from 'react'
import {useRef, useState} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import {DragItemViewType, DragType, DropAcceptList} from "../../../common/editor/DragItemViewType";
import {ItemView} from "../../../store/GlobalViewData";
import {counterActions, RootState, store} from "../../../store";
import {useSelector} from "react-redux";
import {random} from "../../../common/Utils";

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
    const style = {//显示虚线框
        border: state.currentSelect.id === itemView.id ? '1px dashed gray' : '0px dashed gray',
        padding: '0.5rem 0.5rem 0.5rem 0.5rem',
        marginBottom: '.5rem',
        backgroundColor: 'white',
        cursor: 'move',
    }
    const [mDragIndex, setMDragIndex] = useState(-1)
    const [{
        handlerId,
        isOver,
        isOverCurrent//当前悬停
    }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null, isOver: boolean, isOverCurrent: boolean }>({
        accept: DropAcceptList,
        drop: (item, monitor) => {
            if (store.getState().currentDrag.dragType === DragType.Add) {//如果是新增
                const didDrop = monitor.didDrop()
                if (didDrop) return
                let randomId = random()
                store.dispatch(counterActions.insertIntoIndex(
                    {
                        index: index,
                        itemView: {
                            id: randomId,
                            type: store.getState().currentDrag.dragViewType,
                            text: randomId,
                            fields: []
                        }
                    }))
            } else if (store.getState().currentDrag.dragType === DragType.Adjust) {//如果是调整
                if (mDragIndex !== -1) {
                    store.dispatch(counterActions.moveToIndex({
                        dragIndex: mDragIndex,
                        hoverIndex: index,
                        itemView: store.getState().itemList[mDragIndex]
                    }))
                }
            }
        },
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({shallow: true})
            }
        },
        hover(item: DragItem, monitor) {//拖拽悬停
            if (!ref.current) return
            setMDragIndex(item.index)//设置当前插入位置
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
    let color
    if (isOverCurrent) {//悬停变色
        color = '#009a00'
        console.log("index:" + index)
        console.log("mDragIndex:" + mDragIndex)
    } else {
        color = '#ffffff'
    }
    let top
    if (mDragIndex < index) {//上边显示指示器 or 下边显示指示器
        top = true
    } else {
        top = false
    }
    return (
        <div>
            {/*指示器*/}
            <div style={{width: "100%", height: 2, backgroundColor: !top ? color : '#ffffff'}}/>
            <div ref={ref} onDrag={handleDrag} onClick={handleClick}
                 style={{...style, opacity}}
                 data-handler-id={handlerId}>
                {children}
            </div>
            {/*指示器*/}
            <div style={{width: "100%", height: 2, backgroundColor: top ? color : '#ffffff'}}/>
        </div>
    )
}
