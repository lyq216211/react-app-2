import React, { useState } from "react";
import InfoItem from "./InfoItem";
import "./IncomingPage.css";
import { nanoid } from "nanoid";
import { Avatar, Button } from "antd";
const IncomingPage = () => {
  const initialTodayData = [
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "%",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "%",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "%",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "秒",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 0,
      tag: "秒",
    },
  ];
  const initialAllData = [
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "%",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "%",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "%",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "秒",
    },
    {
      id: nanoid(),
      name: "呼入总量",
      value: 12,
      tag: "秒",
    },
  ];
  const [infos, setInfos] = useState(initialTodayData);

  const toggleAllInfo = () => {
    setInfos(initialAllData);
  };
  const toggleTodayInfo = () => {
    setInfos(initialTodayData);
  };
  return (
    <div className="incoming-page">
      <div className="incoming-header">
        <div className="header-info">
          <Avatar
            shape="square"
            size={64}
            src={"../../../../public/b7ac3966c2a9884e676cc7df2558098c.png"}
          />
          <div>
            <h4>欢迎</h4>
            <h5>安顿思域测试帐号</h5>
          </div>
        </div>
      </div>
      <div className="incoming-info">
        <div className="info-title">
          <span>接警概览</span>
          <div className="title-btn">
            <Button onClick={toggleTodayInfo}>今日</Button>
            <Button onClick={toggleAllInfo}>全部</Button>
          </div>
        </div>
        <div className="info-items">
          {infos.map((info) => (
            <InfoItem key={info.id} {...info}></InfoItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomingPage;
