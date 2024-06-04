import { Button, Checkbox, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";

const FormTest = () => {
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        style={{ maxWidth: "800px" }}
        layout="horizontal"
        onFinish={() => console.log("finish")}
        onFinishFailed={(e) => console.log(e)}
        initialValues={{ remember: true }}
      >
        <FormItem label="Username" name="username" rules={[{ required: true, message: "请填" }]}>
          <Input></Input>
        </FormItem>
        <FormItem label="Password" name="password" rules={[{ required: true, message: "请填" }]}>
          <Input></Input>
        </FormItem>
        <FormItem
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 4,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </FormItem>
        <FormItem
          name="button"
          wrapperCol={{
            offset: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default FormTest;
