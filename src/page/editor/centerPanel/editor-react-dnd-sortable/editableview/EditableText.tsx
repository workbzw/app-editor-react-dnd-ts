import React from "react";
import {Card, CardProps} from "../Card";

interface P extends CardProps {
    text?:string
}

export const EditableText = (props: P) => {
    let {id, text,index, moveCard} = props;
    return (
        <Card id={id} select={false} index={index} moveCard={moveCard}>
            <div className={"editable"}>{text}</div>
        </Card>
    )
}