import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import Dragger from "antd/es/upload/Dragger";
import React from "react";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const checkOptions = [
  {
    label: "A",
    value: "A",
  },
  {
    label: "B",
    value: "B",
    disabled: true,
  },
  {
    label: "C",
    value: "C",
  },
  {
    label: "D",
    value: "D",
  },
  {
    label: "E",
    value: "E",
  },
  {
    label: "F",
    value: "F",
  },
];
const Form6 = () => {
  const valuesChange = (changeV, allV) => {
    console.log("change,", changeV);
    console.log("all,", allV);
  };
  const onFinish = (values) => {
    console.log("finish,,,,", values);
  };
  return (
    <div>
      <Form
        {...layout}
        style={{ maxWidth: "500px" }}
        onValuesChange={valuesChange}
        onFinish={onFinish}
      >
        <FormItem label="Plain Text">
          <span>China</span>
        </FormItem>
        <FormItem
          label="Select"
          name="select"
          rules={[{ required: true, message: "Please select your country!" }]}
          initialValue={"Chinaa"}
        >
          <Select>
            <Select.Option value="china">China</Select.Option>
            <Select.Option value="usa">U S A</Select.Option>
          </Select>
        </FormItem>
        <FormItem
          label="Select[mul]"
          name="selectmultiple"
          initialValue={["red"]}
          rules={[{ required: true, message: "Please select your color" }]}
        >
          <Select mode="multiple" placeholder="Please select" allowClear>
            <Select.Option value="red">Red</Select.Option>
            <Select.Option value="blue">Blue</Select.Option>
            <Select.Option value="green">Green</Select.Option>
          </Select>
        </FormItem>
        <FormItem label="inputnumber">
          <FormItem name="inputnumber" noStyle initialValue={1}>
            <InputNumber max={9} min={1}></InputNumber>
          </FormItem>
          machines
        </FormItem>
        <FormItem label="Switch" name="switch">
          <Switch></Switch>
        </FormItem>
        <FormItem label="Slider" name="slider">
          <Slider
            marks={{
              0: "A",
              20: "B",
              40: "C",
              60: "D",
              80: "E",
              100: "F",
            }}
          ></Slider>
        </FormItem>
        <FormItem label="Radio Group" name="radio-group">
          <Radio.Group>
            <Radio value="item1">item1</Radio>
            <Radio value="item2">item2</Radio>
            <Radio value="item3">item3</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          label="Radio Button"
          name="radio-button"
          rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group size="large">
            <Radio.Button value="item1">item1</Radio.Button>
            <Radio.Button value="item2">item2</Radio.Button>
            <Radio.Button value="item3">item3</Radio.Button>
          </Radio.Group>
        </FormItem>
        <FormItem label="Check.Group" name="check-group">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value="a">A</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="b">A</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="c">A</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="d">A</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="e">A</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="f">A</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </FormItem>
        <FormItem label="Rate" name="rate">
          <Rate allowHalf></Rate>
        </FormItem>
        <FormItem label="Upload" name="upload">
          <Upload fileList={[]}>
            <Button>
              <UploadOutlined />
              click to upload
            </Button>
          </Upload>
        </FormItem>
        <FormItem label="Dragger" name="drag">
          <Dragger fileList={[]}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or
              other band files
            </p>
          </Dragger>
        </FormItem>
        <FormItem label="Submit" name="submit">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Form6;
