// 消息列表
import React from "react";
import Input from "./input";

import "../scss/message/index.scss";

class Message extends React.Component {
  render() {
    return (
      <div className="flex-sub flex flex-direction">
        <div className="flex-sub messages padding">
          <div className="flex align-start">
            <div className="avatar margin-right">我</div>
            <div className="content" style={{ background: "red" }}>
              2222
            </div>
          </div>
          <div className="text-center w100">22:41</div>
          <div className="flex align-start">
            <div className="flex-sub" />
            <div className="content" style={{ background: "green" }}>
              99999
            </div>
            <div className="avatar margin-left">对</div>
          </div>
        </div>
        <Input />
      </div>
    );
  }
}

export default Message;
