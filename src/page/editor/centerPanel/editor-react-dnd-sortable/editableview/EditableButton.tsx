import React from "react";
import {Button} from "antd";
import {Card, CardProps} from "../Card";

interface P extends CardProps {
    text?: string
}

export const EditableButton = (props: P) => {
    let {id, text, index, moveCard} = props;
    return (
        <Card id={id} select={false} index={index} moveCard={moveCard}>
            <Button>按钮</Button>
        </Card>
    )
}