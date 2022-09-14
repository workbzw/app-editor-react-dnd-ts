import React from "react";
import {Input} from "antd";
import {DragItemView, Props} from "../DragItemView";

interface P extends Props {
    preInput?: string;
    hint?: string;
}

export const EditableInput = (props: P) => {
    let {itemView, index, moveItem} = props;
    return (<DragItemView itemView={itemView} index={index} moveItem={moveItem}>
            <Input value={itemView.text}/>
        </DragItemView>
    )
}