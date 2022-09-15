import React from "react";
import {Button} from "antd";
import {DraggableView, Props} from "../DraggableView";

interface P extends Props {
    text?: string
}

export const ButtonView = (props: P) => {
    let {itemView, index, } = props;
    return (<DraggableView itemView={itemView} index={index} >
            <Button>{itemView.text}</Button>
        </DraggableView>
    )
}