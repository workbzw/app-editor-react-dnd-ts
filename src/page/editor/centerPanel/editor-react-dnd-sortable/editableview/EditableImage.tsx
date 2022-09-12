import React from "react";
import {Image} from "antd";
import {DragItemView, Props} from "../DragItemView";

interface P extends Props {
    imgUrl?: string;
}

export const EditableImage = (props: P) => {
    let {imgUrl, id, index, moveItem} = props;
    return (
        <DragItemView id={id} select={false} index={index} moveItem={moveItem}>
            <Image src={imgUrl} preview={false}/>
        </DragItemView>
    )
}