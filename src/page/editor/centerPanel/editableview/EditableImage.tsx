import React from "react";
import {Image} from "antd";
import {DragItemView, Props} from "../DragItemView";

interface P extends Props {
    imgUrl?: string;
}

export const EditableImage = (props: P) => {
    let {itemView, imgUrl,index, } = props;
    return (<DragItemView itemView={itemView} index={index} >
            <Image src={imgUrl} preview={false}/>
        </DragItemView>
    )
}