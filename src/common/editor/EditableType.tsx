//此处添加组件类型
export enum EditableType {
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
    EditableType.Text,
    EditableType.Button,
    EditableType.Input,
    EditableType.Image,
    EditableType.Banner,
    EditableType.List,
    EditableType.Layout,
    EditableType.Card,
]

export enum DragType {
    Add = "Add",//新增
    Adjust = "Adjust",//调整
}

