import React from "react";
import PropsType from "prop-types";
import CanBox from "./canBox";
import "./scss/index.scss";

class DragSize extends React.Component {
  static propsType = {
    top: PropsType.bool,
    right: PropsType.bool,
    bottom: PropsType.bool,
    left: PropsType.bool,
    topRight: PropsType.bool,
    topLeft: PropsType.bool,
    bottomRight: PropsType.bool,
    bottomLeft: PropsType.bool,
  };
  static defaultProps = {
    top: true,
    right: true,
    bottom: true,
    left: true,
    topRight: true,
    topLeft: true,
    bottomRight: true,
    bottomLeft: true,
  };
  render() {
    return (
      <div className="flex drag-size">
        <CanBox className="flex" />
        {this.props.children}
      </div>
    );
  }
}

export default DragSize;
