import React from "react";
import {Input} from "antd";
import {DragItemView, Props} from "../DragItemView";

interface P extends Props {
    preInput?: string;
    hint?: string;
}

export const EditableInput = (props: P) => {
    let {id, index, moveItem} = props;
    return (
        <DragItemView id={id} select={false} index={index} moveItem={moveItem}>
            <Input/>
        </DragItemView>
    )
}