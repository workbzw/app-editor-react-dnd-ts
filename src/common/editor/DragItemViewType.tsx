//此处添加组件类型
export enum DragItemViewType {
    Text = "Text",
    Button = "Button",
    Input = "Input",
    Image = "Image",
    Banner = "Banner",
    List = "List",
    Layout = "Layout",
    Card = "Card",
}

//添加组件类型之后，在此处添加进放置接收类型
export const DropAcceptList = [
    DragItemViewType.Text,
    DragItemViewType.Button,
    DragItemViewType.Input,
    DragItemViewType.Image,
    DragItemViewType.Banner,
    DragItemViewType.List,
    DragItemViewType.Layout,
    DragItemViewType.Card,
]

export enum DragType {
    Add = "Add",//新增
    Adjust = "Adjust",//调整
}

