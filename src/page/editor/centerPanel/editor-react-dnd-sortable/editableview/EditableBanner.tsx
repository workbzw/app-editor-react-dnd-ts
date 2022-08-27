import React from "react";
import {Carousel} from "antd";
import {Card, CardProps} from "../Card";

interface P extends CardProps {
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

export const EditableBanner = (props: P) => {
    let {id, index, select, moveCard} = props;
    return (<Card id={id} select={select} index={index} moveCard={moveCard}>
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
                <div>
                    <h3 style={contentStyle}>图片4</h3>
                </div>
            </Carousel>
        </Card>
    )
}