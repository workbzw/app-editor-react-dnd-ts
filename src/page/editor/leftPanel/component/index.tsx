import React, {useContext} from "react";
import "./leftPanelItem.scss"
import {useDrag} from "react-dnd";
import MyContext, {ContextData} from "../../../../context/context"
import {Card, Image} from "antd";
import {DragType, EditableType} from "../../../../common/editor/EditableType";

interface P {
    text: string;
    type: EditableType;
    img: string;
}

const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
};


export const LeftPanelItem = (props: P) => {
    let {text, type, img} = props
    let contextData = useContext<ContextData>(MyContext)
    let handleDrag = () => {
        contextData.viewType = type;
        contextData.drag.dragType = DragType.Add;
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