import React, { Component } from "react";
import { connect } from "react-redux";
import "./scss/index.scss";
import Popover from "../../components/Popover";

class Sidebar extends Component {
  render() {
    let { userInfo } = this.props;
    return (
      <div className="sidebar">
        <div style={{ height: "25px" }} />
        <Popover content={userInfo.create_at} title={userInfo.name}>
          <div className="avatar">
            <span />
            <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" width="40" height="40" />
          </div>
        </Popover>
      </div>
    );
  }
}

export default connect(function mapStateToProps(state) {
  return {
    userInfo: state.defaultReducer.userInfo,
  };
})(Sidebar);
