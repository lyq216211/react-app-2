import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  message,
} from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import "./QRCodePage.css";
import FormItem from "antd/es/form/FormItem";
import { nanoid } from "nanoid";
import debounce from "lodash/debounce";

const QRCodePage = () => {
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "二维码链接",
      dataIndex: "link",
      key: "name",
    },
    {
      title: "创建日期",
      dataIndex: "date",
      key: "name",
    },
    {
      title: "扫码次数",
      key: "name",
      dataIndex: "count",
    },
    {
      title: "操作",
      key: "name",
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a>查看</a>
          <a>下载</a>
          <a onClick={() => deleteItem(record.id)}>删除</a>
        </Space>
      ),
    },
  ];
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const { RangePicker } = DatePicker;
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const refresh = async () => {
    console.log("ipval", inputValue);
    // setInputValue("");
    await fetchUrl("/api/v1/books", inputValue);
  };
  const fetchUrl = async (url, params = "") => {
    setLoding(true);
    const res = await fetch(url + "/" + params);
    const data = await res.json();
    setData(data);
    // console.log("data   ", data);

    setLoding(false);
  };
  const handleOk = async () => {
    const formdata = await form?.validateFields();
    // console.log(formdata);
    setConfirmLoading(true);
    await fetch("/api/v1/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ...formdata, id: nanoid() }),
    });
    form?.resetFields();
    setConfirmLoading(false);
    setIsModalOpen(false);
    refresh();
    messageApi.open({
      type: "success",
      content: "新建成功",
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const deleteItem = async (id) => {
    setLoding(true);
    await fetch(`/api/v1/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 可以添加其他请求头
      },
    });
    setLoding(false);
    await refresh();
    messageApi.open({
      type: "success",
      content: "删除成功",
    });
  };
  const searchItem = async (id) => {
    await fetchUrl("/api/v1/books", id);
  };
  useEffect(() => {
    fetchUrl("/api/v1/books");
  }, []);

  return (
    <div>
      <h2>二维码转发管理</h2>
      <div className="header">
        <Form
          labelCol={{
            span: 20,
          }}
          wrapperCol={{
            span: 52,
          }}
          layout="inline"
          style={{
            maxWidth: 600,
          }}
          className="QRcode-form"
          onValuesChange={debounce((changedValues, allValues) => {
            const id = changedValues.input;
            searchItem(id);
          }, 300)}
        >
          <Form.Item name="date">
            <RangePicker placeholder={["扫码日期", "扫码日期"]} />
          </Form.Item>
          <Form.Item name="input">
            <Input
              placeholder="二维码名称"
              // value={inputValue}
              // onChange={(e) => setInputValue(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="button">
            <Flex gap="small" wrap="nowrap">
              {contextHolder}
              <Button size={"large"}>导出</Button>
              <Button size={"large"} onClick={refresh}>
                刷新
                <ReloadOutlined />
              </Button>
              <Button
                type="primary"
                size={"large"}
                onClick={() => setIsModalOpen(true)}
              >
                新建
              </Button>
            </Flex>
          </Form.Item>
        </Form>
        <Modal
          title="新建二维码"
          open={isModalOpen}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okText="新建"
          cancelText="取消"
        >
          <Form
            form={form}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
          >
            <FormItem label="名称" name="name">
              <Input></Input>
            </FormItem>
            <FormItem label="二维码链接" name="link">
              <Input></Input>
            </FormItem>
            <FormItem label="创建日期" name="date">
              <DatePicker />
            </FormItem>
            <FormItem label="扫码次数" name="count">
              <Input></Input>
            </FormItem>
          </Form>
        </Modal>
      </div>
      <div className="QRcode-table">
        <Table dataSource={data} columns={columns} loading={loading}></Table>
      </div>
    </div>
  );
};

export default QRCodePage;
