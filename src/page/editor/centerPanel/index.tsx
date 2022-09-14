import React, {FC, useContext} from "react";
import "./center.scss"
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Container} from "./editor-react-dnd-sortable/Container";
import MyContext from '../../../context/context'

interface Props {
}

export const CenterPanel: FC<Props> = () => {
    const context = useContext(MyContext);
    return (
        <div className={"draw-panel"}>
            <DndProvider backend={HTML5Backend}>
                <Container/>
            </DndProvider>
        </div>
    );
}
