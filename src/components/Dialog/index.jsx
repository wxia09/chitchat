import React, { memo } from "react";
import PropTypes from "prop-types";

import "./scss/index.scss";

class Dialog extends React.Component {
  static propsType = {
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string,
    show: PropTypes.bool.isRequired,
    cancel: PropTypes.func,
    persistent: PropTypes.bool,
  };
  static defaultProps = {
    width: "500px",
    height: "300px",
    persistent: true,
  };
  render() {
    let props = this.props;
    console.log(1);
    return (
      <div
        className={"mp-wrap flex align-center justify-center" + (props.show ? " show" : "")}
        onClick={props.persistent ? props.cancel : () => {}}
      >
        <div className={"dialog"} style={{ width: props.width, height: props.height }}>
          <div className={"title"}>
            <span>{props.title}</span>
            <span style={{ flex: 1 }} />
            <span onClick={props.cancel} className="iconfont icon-close cursor-pointer" />
          </div>
          <div className={"content"}>{props.children}</div>
        </div>
      </div>
    );
  }
}

export default memo(Dialog);
