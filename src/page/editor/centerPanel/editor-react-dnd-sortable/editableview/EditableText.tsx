import React from "react";
import {DragItemView, Props} from "../DragItemView";

interface P extends Props {
    text?:string
}

export const EditableText = (props: P) => {
    let {id, text,index, moveItem} = props;
    return (
        <DragItemView id={id} select={false} index={index} moveItem={moveItem}>
            <div className={"editable"}>{text}</div>
        </DragItemView>
    )
}