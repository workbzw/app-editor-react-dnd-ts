import React from "react";
import {Image} from "antd";
import {DraggableView, Props} from "../DraggableView";

interface P extends Props {
    imgUrl?: string;
}

export const ImageView = (props: P) => {
    let {itemView, imgUrl,index, } = props;
    return (<DraggableView itemView={itemView} index={index} >
            <Image src={imgUrl} preview={false}/>
        </DraggableView>
    )
}