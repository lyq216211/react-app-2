import { Button, DatePicker, Form, Space, TimePicker, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const Form4 = () => {
  const rulesArr = [{ required: true, message: "Please select time!" }];
  const { RangePicker } = DatePicker;
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = (fieldsValue) => {
    console.log("fiele,,,", fieldsValue);
    const value = {
      ...fieldsValue,
      date1: fieldsValue["date1"].format("YYYY-MM-DD"),
      date2: fieldsValue["date2"].format("YYYY-MM-DD HH:mm:ss"),
      date3: fieldsValue["date3"].format("YYYY-MM"),
      date4: [
        fieldsValue["date4"][0].format("YYYY-MM-DD"),
        fieldsValue["date4"][1].format("YYYY-MM-DD"),
      ],
      date5: [
        fieldsValue["date5"][0].format("YYYY-MM-DD HH:mm:ss"),
        fieldsValue["date5"][1].format("YYYY-MM-DD HH:mm:ss"),
      ],
      date6: fieldsValue["date6"].format("HH:mm:ss"),
    };
    console.log("value,,,,", value);
  };
  return (
    <div>
      <Form {...layout} onFinish={onFinish}>
        <Space direction="vertical">
          <FormItem label="DatePicker" name="date1" rules={rulesArr}>
            <DatePicker></DatePicker>
          </FormItem>
          <FormItem label="DatePicker[showtime]" name="date2" rules={rulesArr}>
            <DatePicker showTime onChange={onChange} format="YYYY-MM-DD"></DatePicker>
          </FormItem>
          <FormItem label="MonthPicker" name="date3" rules={rulesArr}>
            <DatePicker picker="month"></DatePicker>
          </FormItem>
          <FormItem label="RangePicker" name="date4" rules={rulesArr}>
            <RangePicker></RangePicker>
          </FormItem>
          <FormItem
            label="RangePicker[showtime]"
            name="date5"
            rules={[{ ...rulesArr[0], type: "array" }]}
          >
            <RangePicker showTime></RangePicker>
          </FormItem>
          <FormItem label="TimePicker" name="date6" rules={rulesArr}>
            <TimePicker></TimePicker>
          </FormItem>
          <FormItem
            wrapperCol={{
              span: 16,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Space>
      </Form>
    </div>
  );
};

export default Form4;
