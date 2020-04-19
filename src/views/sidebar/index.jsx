import React, { Component } from "react";
import "./scss/index.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="avatar">
          <span />
          <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" width="40" height="40" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
