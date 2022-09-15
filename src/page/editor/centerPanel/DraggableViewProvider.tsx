import {DragItemViewType} from "../../../common/editor/DragItemViewType";
import {TextView} from "./view/TextView";
import {ImageView} from "./view/ImageView";
import {ListView} from "./view/ListView";
import {BannerView} from "./view/BannerView";
import {ButtonView} from "./view/ButtonView";
import {InputView} from "./view/InputView";
import {ItemView} from "../../../store/GlobalViewData";

export class DraggableViewProvider {
    static of(itemView: ItemView,  index: number) {
        switch (itemView.type) {
            case DragItemViewType.Banner:
                return <BannerView itemView={itemView} index={index} />;
            case DragItemViewType.Text:
                return <TextView itemView={itemView} index={index} />;
            case DragItemViewType.Image:
                return <ImageView itemView={itemView} index={index}
                                  imgUrl={"https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg"}/>;
            case DragItemViewType.List:
                return <ListView itemView={itemView} index={index} />;
            case DragItemViewType.Button:
                return <ButtonView itemView={itemView} index={index} />;
            case DragItemViewType.Input:
                return <InputView itemView={itemView} index={index} />;
            default:
                return <div>未知组件</div>;
        }
    }
}
