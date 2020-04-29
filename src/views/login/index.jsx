import React from "react";

import "./scss/index.scss";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "12",
    password: "111111",
  };
  handleLogin() {
    let { username, password } = this.state;
    axios
      .post("http://localhost:3005/login", { username, password })
      .then((res) => {
        console.log(res.data.data);
        return axios.post("http://localhost:3005/auth/user", null, {
          headers: {
            authorization: res.data.token,
          },
        });
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="login">
        <div>
          <label htmlFor="user">账号</label>
          <input type="text" id="user" />
        </div>
        <div>
          <label htmlFor="password">密码:</label>
          <input type="password" id="password" />
        </div>
        <div className="button">
          <button>重置</button>
          <button onClick={this.handleLogin.bind(this)}>确定</button>
        </div>
      </div>
    );
  }
}

export default Login;
