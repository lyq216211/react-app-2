import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
import IncomingPage from "./project1/IncomingPage";
import QRCodePage from "./project2/QRCodePage";
import UseUpdateDemo from "./hooks/UseUpdateDemo";
import "./App.css";
import { ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/locale/zh_CN";
moment.locale("zh-cn");
import FormTest from "./project3/Form2";
import Use from "./hooks2/UseGetStateDemo";
function App() {
  return (
    <ConfigProvider locale={locale}>
      {/* <Count></Count> */}
      {/* <IncomingPage></IncomingPage> */}
      {/* <QRCodePage></QRCodePage> */}
      {/* <UseUpdateDemo></UseUpdateDemo> */}
      {/* <FormTest></FormTest> */}
      <Use></Use>
    </ConfigProvider>
  );
}

export default App
