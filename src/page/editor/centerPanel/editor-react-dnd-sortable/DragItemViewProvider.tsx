import {DragItemViewType} from "../../../../common/editor/DragItemViewType";
import {EditableText} from "./editableview/EditableText";
import {EditableImage} from "./editableview/EditableImage";
import {EditableList} from "./editableview/EditableList";
import {EditableBanner} from "./editableview/EditableBanner";
import {EditableButton} from "./editableview/EditableButton";
import {EditableInput} from "./editableview/EditableInput";
import {ItemView} from "../../../../context/context";

export class DragItemViewProvider {
    static of(itemView: ItemView,  index: number, moveItem: (dragIndex: number, hoverIndex: number) => void) {
        switch (itemView.type) {
            case DragItemViewType.Banner:
                return <EditableBanner itemView={itemView} index={index} moveItem={moveItem}/>;
            case DragItemViewType.Text:
                return <EditableText itemView={itemView} index={index} moveItem={moveItem}/>;
            case DragItemViewType.Image:
                return <EditableImage itemView={itemView} index={index} moveItem={moveItem}
                                      imgUrl={"https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg"}/>;
            case DragItemViewType.List:
                return <EditableList itemView={itemView} index={index} moveItem={moveItem}/>;
            case DragItemViewType.Button:
                return <EditableButton itemView={itemView} index={index} moveItem={moveItem}/>;
            case DragItemViewType.Input:
                return <EditableInput itemView={itemView} index={index} moveItem={moveItem}/>;
            default:
                return <div>未知组件</div>;
        }
    }
}
