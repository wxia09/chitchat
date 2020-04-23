import React, { Component } from "react";
import "./scss/index.scss";
import { FriendList } from "./component/item";

class Friends extends Component {
  render() {
    return (
      <div className={"friend"}>
        <FriendList />
      </div>
    );
  }
}

export default Friends;
