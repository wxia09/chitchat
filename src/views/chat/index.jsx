import React, { Component } from "react";
import Roof from "./roof";
import Messages from "./messages";
import List from "./list";
import Contacts from "./contacts";

import "./scss/index/index.scss";

class Chat extends Component {
  render() {
    return (
      <div className="flex chat flex-sub">
        <div className="list">
          <Roof />
          <List />
          <Contacts />
        </div>
        <div className="flex-sub">
          <Messages />
        </div>
      </div>
    );
  }
}

export default Chat;
