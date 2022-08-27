import React from "react";
import {Avatar, List} from "antd";
import {Card, CardProps} from "../Card";

interface P extends CardProps {
}

const data = Array.from({length: 3}).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
export const EditableList = (props: P) => {
    let {id, index, moveCard} = props;
    return (
        <Card id={id} select={false} index={index} moveCard={moveCard}>
            <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                // bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta style={{paddingLeft: 10, paddingRight: 10}}
                                        avatar={<Avatar src={item.avatar}/>}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                        />
                    </List.Item>
                )}
            />
        </Card>
    )
}