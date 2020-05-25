// 消息列表
import React from "react";
import Input from "./input";

import "../scss/message/index.scss";

class Message extends React.Component {
  render() {
    return (
      <div className="flex flex-direction message">
        <div className="flex-sub messages">
          <div className="title">这个是标题</div>
        </div>
        <Input />
      </div>
    );
  }
}

export default Message;
