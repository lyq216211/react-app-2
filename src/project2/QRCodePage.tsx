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
import useUpdate from "../hooks/useUpdate";
import dayjs from "dayjs";

const QRCodePage = () => {
  const [state, update] = useUpdate();
  const [isCreate, setIsCreate] = useState(true);
  const [updateItemId, setUpdateItemId] = useState(0);
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
          <a
            onClick={() => {
              setIsModalOpen(true);
              setIsCreate(false);
              setUpdateItemId(record.id);
              createForm.setFieldsValue({
                ...record,
                date: dayjs(record.date),
              });
            }}
          >
            编辑
          </a>
          <a>查看</a>
          <a>下载</a>
          <a onClick={() => deleteItem(record.id)}>删除</a>
        </Space>
      ),
    },
  ];
  const [searchForm] = Form.useForm();
  const [createForm] = Form.useForm();
  const [data, setData] = useState([]);
  const { RangePicker } = DatePicker;
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoding] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const refresh = () => {
    fetchUrl("/api/v1/books");
  };
  const fetchUrl = async (url, params = "") => {
    setLoding(true);
    const res = await fetch(url + "/" + params);
    const data = await res.json();
    setData(data);
    setLoding(false);
  };
  const handleOk = async () => {
    const formdata = await createForm?.validateFields();
    setConfirmLoading(true);
    if (isCreate) {
      createItem(formdata);
    } else {
      updateItem(formdata);
    }
    createForm?.resetFields();
    setConfirmLoading(false);
    setIsModalOpen(false);
    refresh();
    messageApi.open({
      type: "success",
      content: `${isCreate ? "新建" : "修改"}成功`,
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    createForm?.resetFields();
  };
  const createItem = async (formdata) => {
    await fetch("/api/v1/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ...formdata, id: nanoid() }),
    });
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
  const updateItem = async (formdata) => {
    await fetch(`/api/v1/books/${updateItemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formdata),
    });
  };
  const searchItem = async (id) => {
    await fetchUrl("/api/v1/books", id);
  };

  useEffect(() => {
    fetchUrl("/api/v1/books", searchForm.getFieldValue("input"));
  }, [state]);

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
          form={searchForm}
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
              <Button size={"large"} onClick={update}>
                刷新
                <ReloadOutlined />
              </Button>
              <Button
                type="primary"
                size={"large"}
                onClick={() => {
                  setIsModalOpen(true);
                  setIsCreate(true);
                }}
              >
                新建
              </Button>
            </Flex>
          </Form.Item>
        </Form>
        <Modal
          title={`${isCreate ? "新建" : "修改"}二维码`}
          open={isModalOpen}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <Form
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            form={createForm}
            name="modal-form"
          >
            <FormItem
              label="名称"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input></Input>
            </FormItem>
            <FormItem
              label="二维码链接"
              name="link"
              rules={[
                {
                  required: true,
                  message: "Please input your link",
                },
              ]}
            >
              <Input></Input>
            </FormItem>
            <FormItem
              label="创建日期"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please input your date!",
                },
              ]}
            >
              <DatePicker />
            </FormItem>
            <FormItem
              label="扫码次数"
              name="count"
              rules={[
                {
                  required: true,
                  message: "Please input your count!",
                },
              ]}
            >
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
