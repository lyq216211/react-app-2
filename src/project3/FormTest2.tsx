import { Button, Checkbox, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";

const { Option } = Select;

const FormTest = () => {
  const [form] = useForm();
  const reset = () => {
    console.log("form,,,,,", form);

    form.resetFields();
  };
  const fill = () => {};
  const genderChange = (value) => {
    // console.log("v  ", value);

    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "mann",
        });
        return;
      case "female":
        form.setFieldValue("note", "woman");
        return;
      case "other":
        form.setFieldsValue({
          note: "there!",
        });
    }
  };
  console.log("render,,,,,,");

  return (
    <div>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: "800px" }}
        layout="horizontal"
        onFinish={() => console.log("finish")}
        onFinishFailed={(e) => console.log(e)}
        // initialValues={{ remember: true }}
        form={form}
        name="control-hooks"
      >
        <FormItem label="note" name="note">
          <Input></Input>
        </FormItem>
        {/* <>{console.log("jsx render,,")}</> */}
        <FormItem label="gender" name="gender">
          <Select onChange={genderChange}>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </FormItem>
        <FormItem noStyle shouldUpdate={(prev, curv) => prev.gender !== curv.gender}>
          {() => {
            return form.getFieldValue("gender") === "other" ? (
              <FormItem label="cus" name="cus">
                <Input></Input>
              </FormItem>
            ) : null;
          }}
        </FormItem>
        <FormItem
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={reset} htmlType="button">
            Reset
          </Button>
          <Button onClick={fill} htmlType="button" type="link">
            Fill form
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default FormTest;
