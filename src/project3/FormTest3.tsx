import { Form, Input, Radio } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const FormTest3 = () => {
  const [formLayout, setFormLayout] = useState("horizontal");
  return (
    <div>
      <Form {...layout} layout={formLayout}>
        <FormItem label="form layout">
          <Radio.Group value={formLayout} onChange={(e) => setFormLayout(e.target.value)}>
            <Radio.Button value="horizontal">horizontal</Radio.Button>
            <Radio.Button value="vertical">vertical</Radio.Button>
            <Radio.Button value="inline">inline</Radio.Button>
          </Radio.Group>
        </FormItem>
        <FormItem label="form field a" name="input-a">
          <Input></Input>
        </FormItem>
        <FormItem label="form field b" name="input-b">
          <Input></Input>
        </FormItem>
      </Form>
    </div>
  );
};

export default FormTest3;
