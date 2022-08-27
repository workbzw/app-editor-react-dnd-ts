import React from "react";
import {LeftPanelItem} from "./component";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import "antd/dist/antd.css";
import {EditableType} from "../../../common/editor/EditableType";

interface P {
}


const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
};

export const LeftPanel = (props: P) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={"left-panel"}>
                <div className={"site-card-wrapper"}>
                    <LeftPanelItem type={EditableType.Banner} text={"轮播图"}
                                   img={"https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg"}
                                   itemStyle={gridStyle}/>
                    <LeftPanelItem type={EditableType.List} text={"列表"}
                                   img={"https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg"}
                                   itemStyle={gridStyle}/>
                    <LeftPanelItem type={EditableType.Button} text={"按钮"}
                                   img={"https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg"}
                                   itemStyle={gridStyle}/>
                    <LeftPanelItem type={EditableType.Image} text={"图片"}
                                   img={"https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg"}
                                   itemStyle={gridStyle}/>
                    <LeftPanelItem type={EditableType.Input} text={"输入框"}
                                   img={"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg"}
                                   itemStyle={gridStyle}/>
                    <LeftPanelItem type={EditableType.Layout} text={"布局"}
                                   img={"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg"}
                                   itemStyle={gridStyle}/>
                </div>
            </div>
        </DndProvider>
    );
}