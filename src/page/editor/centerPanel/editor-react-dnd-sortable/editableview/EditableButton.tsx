import React from "react";
import {Button} from "antd";
import {DragItemView, Props} from "../DragItemView";

interface P extends Props {
    text?: string
}

export const EditableButton = (props: P) => {
    let {itemView, index, moveItem} = props;
    return (<DragItemView itemView={itemView} index={index} moveItem={moveItem}>
            <Button>{itemView.text}</Button>
        </DragItemView>
    )
}