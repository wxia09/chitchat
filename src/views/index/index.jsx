import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../sidebar";
import DragSize from "../../components/DragSize";
import Chat from "../chat/index";
import "../../static/font/iconfont.css";
import { http } from "../../utils/http";

import io from "socket.io-client";

class Index extends Component {
  componentDidMount() {
    http("auth/user")
      .then((res) => {
        let { data } = res.data;
        this.props.setUserInfo(data);
        let socket = io(process.env.REACT_APP_SOCKET_URL, {
          query: {
            token: this.props.token,
          },
        });
        // socket.emit("connect");
        socket.on("receive", (data) => {
          console.log(data, 999999);
        });
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
      token: state.defaultReducer.token,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      setUserInfo: (v) => dispatch({ type: "userInfo", value: v }),
    };
  }
)(Index);
