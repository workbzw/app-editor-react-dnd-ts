import React from "react";
import {Button} from "antd";
import {DragItemView, Props} from "../DragItemView";

interface P extends Props {
    text?: string
}

export const EditableButton = (props: P) => {
    let {id, text, index, moveItem} = props;
    return (
        <DragItemView id={id} select={false} index={index} moveItem={moveItem}>
            <Button>按钮</Button>
        </DragItemView>
    )
}