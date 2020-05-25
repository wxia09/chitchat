import "../../scss/message/input.scss";
import React from "react";

class Input extends React.PureComponent {
  render() {
    return (
      <div className="input-box text-right">
        <textarea name="" id="" rows="3" className="dis-b textarea" />
        <button className="button">发送</button>
      </div>
    );
  }
}

export default Input;
