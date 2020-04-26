import React from "react";

import "./scss/index.scss";

class Login extends React.Component {
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
          <button>确定</button>
        </div>
      </div>
    );
  }
}

export default Login;
