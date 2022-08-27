import React, {useEffect, useState} from "react";
import "./rightPanel.scss"
import {Form, Input} from "antd";

interface P {
    viewId: string;
    text: string;
    size: number;
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
                rules={[{required: true, message: 'Username is required!'}]}
            ><Input/>
            </Form.Item>
        ))}
    </Form>
);
export const RightPanel = (props: P) => {
    let {viewId, text, size} = props
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);

    useEffect(() => {
        form.validateFields(['nickname']).then(r => {
        });
    }, [checkNick, form]);

    const [fields, setFields] = useState<FieldData[]>([{name: '字号', value: '12'}, {name: '字体', value: '宋体'}]);
    return (
        <div className={"right-panel"}>
            <CustomizedForm
                fields={fields}
                onChange={newFields => {
                    setFields(newFields);
                }}/>
            <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
        </div>
    );
}