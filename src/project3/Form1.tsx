import { Form, Input, Select, Space, Tooltip, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";
import Title from "antd/es/typography/Title";
import React from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const Form1 = () => {
  return (
    <div>
      <Form {...layout} onValuesChange={(changedValues, values) => console.log(values)}>
        <FormItem label="Username">
          <Space>
            <FormItem name="username" noStyle>
              <Input></Input>
            </FormItem>
            <Tooltip title="form api">
              <Typography.Link>NEed help?</Typography.Link>
            </Tooltip>
          </Space>
        </FormItem>
        <FormItem label="Address">
          <Input.Group compact>
            <FormItem name="city" noStyle>
              <Select placeholder="select">
                <Select.Option value="zhejiang">浙江</Select.Option>
                <Select.Option value="jiangsu">江苏</Select.Option>
              </Select>
            </FormItem>
            <FormItem name="street" noStyle>
              <Input placeholder="input street" style={{ width: "50%" }}></Input>
            </FormItem>
          </Input.Group>
        </FormItem>
        <FormItem label="birthDate">
          <Input.Group compact>
            <FormItem name="year" noStyle>
              <Input style={{ width: "50%" }} placeholder="input birthday year"></Input>
            </FormItem>
            <FormItem name="month" noStyle>
              <Input style={{ width: "50%" }} placeholder="input birthday month"></Input>
            </FormItem>
          </Input.Group>
        </FormItem>
        <FormItem label="birthDate">
          <FormItem name="yea" noStyle>
            <Input
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              placeholder="input birthday year"
            ></Input>
          </FormItem>
          <FormItem name="mont" noStyle>
            <Input
              style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px" }}
              placeholder="input birthday month"
            ></Input>
          </FormItem>
        </FormItem>
      </Form>
    </div>
  );
};

export default Form1;
