import React, {useContext, useEffect, useState} from "react";
import "./rightPanel.scss"
import {Form, Input} from "antd";
import MyContext, {ContextData, ItemView} from '../../../context/context'
import {counterActions, RootState, store} from "../../../store";
import {useSelector} from "react-redux";

interface P {
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
    const state = useSelector((state: RootState) => state);
    const onChange = (e: any) => {
        store.dispatch(counterActions.setItemViewText({text:e.target.value,id:state.currentSelect.id}))
        // state.currentSelect.text = e.target.value
        // store.dispatch(counterActions.setItemView(state.currentSelect))
    }

    return (
        <div className={"right-panel"}>
            <Input
                placeholder="Flight name"
                size="large"
                value={state.currentSelect.text}
                onChange={onChange}
            />
        </div>
    );
}