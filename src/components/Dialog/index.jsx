import React from "react";
import PropTypes from "prop-types";

import "./scss/index.scss";

class Dialog extends React.Component {
  static propsType = {
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string,
    show: PropTypes.bool.isRequired,
    cancel: PropTypes.func,
  };
  static defaultProps = {
    width: "500px",
    height: "300px",
  };
  render() {
    let props = this.props;
    console.log(props);
    return (
      <div className={"mp-wrap" + (props.show ? " show" : "")} onClick={props.cancel}>
        <div className={"dialog"} style={{ width: props.width, height: props.height }}>
          <div className={"title"}>
            <span>{props.title}</span>
            <span style={{ flex: 1 }} />
            <span onClick={props.cancel}>x</span>
          </div>
          <div className={"content"}>{props.children}</div>
        </div>
      </div>
    );
  }
}

export default Dialog;
