import React from "react";
import {Input} from "antd";
import {Card, CardProps} from "../Card";

interface P extends CardProps {
    preInput?: string;
    hint?: string;
}

export const EditableInput = (props: P) => {
    let {id, index, moveCard} = props;
    return (
        <Card id={id} select={false} index={index} moveCard={moveCard}>
            <Input/>
        </Card>
    )
}