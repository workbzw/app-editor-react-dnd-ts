import React from "react";
import {Carousel} from "antd";
import {DraggableView, Props} from "../DraggableView";

interface P extends Props {
    imgUrl?: string;
}

const contentStyle: React.CSSProperties = {
    height: '160px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const BannerView = (props: P) => {
    let {itemView, index} = props;
    return (<DraggableView itemView={itemView} index={index} >
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>图片1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>图片2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>图片3</h3>
                </div>
            </Carousel>
        </DraggableView>
    )
}