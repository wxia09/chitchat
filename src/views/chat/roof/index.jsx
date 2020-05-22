// 顶部窗口, 任何时候都会存在, 只是返回的状态有所不同
// +按钮在朋友列表时候出来
import React, { Component } from "react";

import "../scss/roof/index.scss";

class Roof extends Component {
  render() {
    return (
      <div className="search flex align-center">
        <div className="input flex-sub">
          <span className="iconfont icon-search" />
          <input type="text" />
        </div>
        <span className="iconfont icon-add add-button" onClick={this.handleShowAddFriend} />
      </div>
    );
  }
}

export default Roof;
