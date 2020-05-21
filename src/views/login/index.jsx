import React from "react";
import { connect } from "react-redux";

import "./scss/index.scss";
import { http } from "../../utils/http";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handlerUsername = this.handlerUsername.bind(this);
    this.handlerPassword = this.handlerPassword.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleLogin() {
    let { username, password } = this.state;
    let { history } = this.props;
    http
      .post("login", { username, password })
      .then((res) => {
        let { data, token } = res.data;
        if (token) {
          window.localStorage.setItem("token", token);
          this.props.setToken(token);
          this.props.setUserInfo(data);
          history.replace("/home");
        }
      })
      .catch((err) => console.log(err));
  }
  handlerPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handlerUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handleReset() {
    this.setState({
      username: "",
      password: "",
    });
  }
  render() {
    return (
      <div className="login">
        <div>
          <label htmlFor="user">账号</label>
          <input type="text" id="user" onChange={this.handlerUsername} />
        </div>
        <div>
          <label htmlFor="password">密码:</label>
          <input type="password" id="password" onChange={this.handlerPassword} />
        </div>
        <div className="button">
          <button onClick={this.handleReset}>重置</button>
          <button onClick={this.handleLogin}>确定</button>
        </div>
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {
      setToken: (v) => dispatch({ type: "token", value: v }),
      setUserInfo: (v) => dispatch({ type: "userInfo", value: v }),
    };
  }
)(Login);
