import React, { Component } from "react";
import "./scss/index.scss";
import Popover from "../../components/Popover";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div style={{ height: "25px" }} />
        <Popover content={"我是内容啊"} title={"我是标题啊"}>
          <div className="avatar">
            <span />
            <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" width="40" height="40" />
          </div>
        </Popover>
      </div>
    );
  }
}

export default Sidebar;
