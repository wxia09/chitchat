import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../sidebar";
import DragSize from "../../components/DragSize";
import Chat from "../chat/index";
import "../../static/font/iconfont.css";
import { http } from "../../utils/http";

class Index extends Component {
  componentDidMount() {
    http("auth/user")
      .then((res) => {
        this.props.setUserInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <DragSize>
        <Sidebar />
        <Chat />
      </DragSize>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      userInfo: state.defaultReducer.userInfo,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      setUserInfo: (v) => dispatch({ type: "userInfo", value: v }),
    };
  }
)(Index);
