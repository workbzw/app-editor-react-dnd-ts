import React, {ChangeEvent, useCallback, useContext, useEffect, useState} from "react";
import "./rightPanel.scss"
import {Form, Input} from "antd";
import MyContext, {ContextData, ItemView} from '../../../context/context'
import update from "immutability-helper";
import {Item} from "../centerPanel/editor-react-dnd-sortable/Container";
import {incremented, RootState, store} from "../../../store";
import {useSelector} from "react-redux";

interface P {
    itemView: ItemView;
}

interface FieldData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
}

interface CustomizedFormProps {
    onChange: (fields: FieldData[]) => void;
    fields: FieldData[];
}

const CustomizedForm: React.FC<CustomizedFormProps> = ({onChange, fields}) => (
    <Form
        name="global_state"
        layout="inline"
        fields={fields}
        onFieldsChange={(_, allFields) => {
            onChange(allFields);
        }}>
        {fields.map((e, i) => (
            <Form.Item
                name={e.name}
                label={e.name}
                rules={[{required: true, message: '必填'}]}>
                <Input/>
            </Form.Item>
        ))}
    </Form>
);


export const RightPanel = (props: P) => {
    let {itemView} = props
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);
    let context = useContext<ContextData>(MyContext)
    const [text, setText] = useState(context.currentSelected.text);
    useEffect(() => {
        form.validateFields(['nickname']).then(r => {
        });
    }, [checkNick, form]);
    const state = useSelector((state: RootState) => state.value);
    const [fields, setFields] = useState<FieldData[]>([{name: state, value: state}]);
    const handleSetFields = (fieldList: FieldData[]) => {
        setFields(fieldList)
        fieldList.map(e => context.currentSelected.text = e.value)
    }
    // onFinish={onFinishSearch}
    // onValuesChange={onValuesChange}
    const changeMsg = (e: any) => {
        context.currentSelected.text = e.target.value
    }

    const onChange = (e: any) => {
        setText(e.target.value)
        context.currentSelected.text = e.target.value
    }

    return (
        <div className={"right-panel"}>
                <Input
                    placeholder="Flight name"
                    size="large"
                    value={context.currentSelected.text}
                    onChange={onChange}
                />
            {/*<pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>*/}
        </div>
    );
}