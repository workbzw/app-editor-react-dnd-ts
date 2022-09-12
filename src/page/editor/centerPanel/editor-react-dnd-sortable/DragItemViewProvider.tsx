import {DragItemViewType} from "../../../../common/editor/DragItemViewType";
import {EditableText} from "./editableview/EditableText";
import {EditableImage} from "./editableview/EditableImage";
import {EditableList} from "./editableview/EditableList";
import {EditableBanner} from "./editableview/EditableBanner";
import {EditableButton} from "./editableview/EditableButton";
import {EditableInput} from "./editableview/EditableInput";

export class DragItemViewProvider {
    static of(id: number, type: DragItemViewType, select: boolean, index: number, moveItem: (dragIndex: number, hoverIndex: number) => void) {
        switch (type) {
            case DragItemViewType.Banner:
                return <EditableBanner id={id} select={select} index={index} moveItem={moveItem}/>;
            case DragItemViewType.Text:
                return <EditableText id={id} select={select} index={index} moveItem={moveItem}/>;
            case DragItemViewType.Image:
                return <EditableImage id={id} select={select} index={index} moveItem={moveItem}
                                      imgUrl={"https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg"}/>;
            case DragItemViewType.List:
                return <EditableList id={id} select={select} index={index} moveItem={moveItem}/>;
            case DragItemViewType.Button:
                return <EditableButton id={id} select={select} index={index} moveItem={moveItem}/>;
            case DragItemViewType.Input:
                return <EditableInput id={id} select={select} index={index} moveItem={moveItem}/>;
            default:
                return <div>未知组件</div>;
        }
    }
}
