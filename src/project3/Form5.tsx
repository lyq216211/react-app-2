import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect, useState } from "react";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Form5 = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [form] = useForm();

  const handleCheckClick = async () => {
    try {
      const res = await form.validateFields();
      console.log("res", res);
    } catch (errorinfo) {
      console.log("error", errorinfo);
    }
  };

  useEffect(() => {
    form.validateFields(["nick-name"]);
  }, [isCheck]);
  return (
    <div>
      <Form {...layout} form={form}>
        <FormItem label="Name" name="name" rules={[{ required: true, message: "请输入姓名" }]}>
          <Input></Input>
        </FormItem>
        <FormItem
          label="NickName"
          name="nick-name"
          rules={[{ required: isCheck, message: "请输入nickName" }]}
        >
          <Input></Input>
        </FormItem>
        <FormItem name="check" wrapperCol={{ span: 16, offset: 8 }}>
          <Checkbox checked={isCheck} onChange={() => setIsCheck(!isCheck)}>
            Nickname is required
          </Checkbox>
        </FormItem>
        <FormItem name="button" wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" onClick={handleCheckClick}>
            check
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Form5;
