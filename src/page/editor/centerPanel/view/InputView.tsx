import React from "react";
import {Input} from "antd";
import {DraggableView, Props} from "../DraggableView";

interface P extends Props {
    preInput?: string;
    hint?: string;
}

export const InputView = (props: P) => {
    let {itemView, index, } = props;
    return (<DraggableView itemView={itemView} index={index} >
            <Input value={itemView.text}/>
        </DraggableView>
    )
}