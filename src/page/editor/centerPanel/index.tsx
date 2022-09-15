import React, {FC} from "react";
import "./center.scss"
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Container} from "./Container";

interface Props {
}

export const CenterPanel: FC<Props> = () => {
    return (
        <div className={"draw-panel"}>
            <DndProvider backend={HTML5Backend}>
                <Container/>
            </DndProvider>
        </div>
    );
}
