import React from "react";
import {DraggableView, Props} from "../DraggableView";

interface P extends Props {
    text?: string
}

export const TextView = (props: P) => {
    let {itemView,text, index} = props;
    return (<DraggableView itemView={itemView} index={index} >
            <div className={"editable"}>{text}</div>
        </DraggableView>
    )
}