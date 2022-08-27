import {EditableType} from "../../../../common/editor/EditableType";
import {EditableText} from "./editableview/EditableText";
import {EditableImage} from "./editableview/EditableImage";
import {EditableList} from "./editableview/EditableList";
import {EditableBanner} from "./editableview/EditableBanner";
import {EditableButton} from "./editableview/EditableButton";
import {EditableInput} from "./editableview/EditableInput";

export class EditableViewProvider {
    static of(id: number, type: EditableType, select: boolean, index: number, moveCard: (dragIndex: number, hoverIndex: number) => void) {
        switch (type) {
            case EditableType.Banner:
                return <EditableBanner id={id} select={select} index={index} moveCard={moveCard}/>;
            case EditableType.Text:
                return <EditableText id={id} select={select} index={index} moveCard={moveCard}/>;
            case EditableType.Image:
                return <EditableImage id={id} select={select} index={index} moveCard={moveCard}
                                      imgUrl={"https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg"}/>;
            case EditableType.List:
                return <EditableList id={id} select={select} index={index} moveCard={moveCard}/>;
            case EditableType.Button:
                return <EditableButton id={id} select={select} index={index} moveCard={moveCard}/>;
            case EditableType.Input:
                return <EditableInput id={id} select={select} index={index} moveCard={moveCard}/>;
            default:
                return <div>未知组件</div>;
        }
    }
}
