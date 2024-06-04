import { Button, Form, Input, Select, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";

const PInput = ({ value = { number: 0, d: "rmb" }, onChange }) => {
  // const [numberValue, setNumberValue] = useState(value);
  const inputChange = async (e) => {
    await onChange?.({ ...value, number: e.target.value });
  };
  const selectChange = (selectValue) => {
    onChange?.({ ...value, d: selectValue });
  };

  return (
    <div>
      <Space>
        <Input value={value.number} onChange={inputChange}></Input>

        <Select
          placeholder="select rmb"
          onChange={selectChange}
          options={[
            {
              value: "rmb",
              label: "Rmb",
            },
            {
              value: "dollar",
              label: "Dollar",
            },
          ]}
        ></Select>
      </Space>
    </div>
  );
};

const Form2 = () => {
  const [form] = useForm();
  const check = (_, value) => {
    console.log("v,,", value);

    // console.log("form,,", form.getFieldsValue());

    if (value.number > 0) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("错误， 请大于0"));
    }
  };
  const onFinish = (values) => {
    console.log("finish,,,", values);
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout="inline"
        form={form}
        onFinish={onFinish}
      >
        <FormItem
          label="Price"
          name="price"
          rules={[{ required: true, message: "请填" }, { validator: check }]}
        >
          <PInput></PInput>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Form2;
