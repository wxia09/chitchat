import React, { Component } from "react";
import "./scss/index.scss";
import Popover from "../../components/Popover";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Popover>
          <div className="avatar" ref={React.createRef("2233")}>
            <span />
            <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" width="40" height="40" />
          </div>
          <div>22334</div>
          <div>55555</div>
        </Popover>
      </div>
    );
  }
}

export default Sidebar;
