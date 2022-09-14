import React from "react";
import "./leftPanelItem.scss"
import {useDrag} from "react-dnd";
import {Card, Image} from "antd";
import {DragItemViewType, DragType} from "../../../../common/editor/DragItemViewType";
import {counterActions, store} from "../../../../store";

interface P {
    text: string;
    type: DragItemViewType;
    img: string;
}

const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
};


export const LeftPanelItem = (props: P) => {
    let {text, type, img} = props
    let handleDrag = () => {
        store.dispatch(counterActions.dragItemView({dragViewType: type, dragType: DragType.Add}))
    }
    let [{isDragging}, dragRef] = useDrag(() => ({
        type: type,
        collect: (monitor) => ({
            isDragging: monitor.isDragging() ? 0.5 : 1
        }),
    }));
    return (
        <div ref={dragRef} onDrag={handleDrag} className={"left-panel-item-parent"}>
            <Card.Grid title={text} style={gridStyle}>
                <div style={{marginBottom: 10}}>{text}</div>
                <Image className={"card-item-img"} src={img} preview={false}/>
            </Card.Grid>
        </div>
    );
}