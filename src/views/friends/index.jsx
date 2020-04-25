import React, { Component } from "react";
import "./scss/index.scss";
import { FriendList } from "./component/item";

class Friends extends Component {
  render() {
    return (
      <div className={"friend"}>
        <div className={"search"}>
          <span className="iconfont icon-search" />
          <input type="text" />
          <span className="iconfont icon-add" />
        </div>
        <FriendList />
      </div>
    );
  }
}

export default Friends;
