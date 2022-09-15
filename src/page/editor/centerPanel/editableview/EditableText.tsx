import React from "react";
import {DragItemView, Props} from "../DragItemView";

interface P extends Props {
    text?: string
}

export const EditableText = (props: P) => {
    let {itemView,text, index} = props;
    return (<DragItemView itemView={itemView} index={index} >
            <div className={"editable"}>{text}</div>
        </DragItemView>
    )
}