import React from "react";
import {Image} from "antd";
import {Card, CardProps} from "../Card";

interface P extends CardProps {
    imgUrl?: string;
}

export const EditableImage = (props: P) => {
    let {imgUrl, id, index, moveCard} = props;
    return (
        <Card id={id} select={false} index={index} moveCard={moveCard}>
            <Image src={imgUrl} preview={false}/>
        </Card>
    )
}