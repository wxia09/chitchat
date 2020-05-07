import React, { Component } from "react";
import "./scss/index.scss";
import { FriendList } from "./component/item";
import Popover from "../../components/Popover";

class Friends extends Component {
  render() {
    return (
      <div className={"friend"}>
        <div className={"search"}>
          <span className="iconfont icon-search" />
          <input type="text" />
          <Popover>
            <span className="iconfont icon-add" />
            <div style={{ position: "absolute" }}>我是添加好友</div>
          </Popover>
        </div>
        <FriendList />
      </div>
    );
  }
}

export default Friends;
