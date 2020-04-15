import React from "react";
import PropsType from "prop-types";
import DragSizeItem from "./DragSizeItem";
import "./scss/index.scss";

class DragSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widowsWidth: 0,
      widowsHeight: 0,
      boxWidth: 0,
      boxHeight: 0,
      left: 0,
      top: 0,
    };
    this.topRight = this.topRight.bind(this);
    this.top = this.top.bind(this);
    this.bottomLeft = this.bottomLeft.bind(this);
    this.bottomRight = this.bottomRight.bind(this);
    this.right = this.right.bind(this);
    this.left = this.left.bind(this);
    this.bottom = this.bottom.bind(this);
  }
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
  componentDidMount() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let boxWidth = width * 0.6;
    let boxHeight = height * 0.8;
    let left = (width - boxWidth) / 2;
    let top = (height - boxHeight) / 2;
    this.setState({
      widowsWidth: width,
      widowsHeight: height,
      boxWidth,
      boxHeight,
      left,
      top,
    });
  }
  topRight() {}
  top() {}
  bottomLeft() {}
  bottomRight() {}
  right() {}
  left() {}
  bottom() {}
  render() {
    let { boxWidth, boxHeight, left, top } = this.state;
    let boxStyle = {
      position: "relative",
      width: boxWidth + "px",
      height: boxHeight + "px",
      top: top + "px",
      left: left + "px",
    };
    return (
      <div className="flex drag-size" style={boxStyle}>
        <DragSizeItem className="top left corner" style={{ cursor: "nw-resize" }} />
        <div className="top right corner" style={{ cursor: "ne-resize" }} />
        <div className="bottom left corner" style={{ cursor: "sw-resize" }} />
        <div className="bottom right corner" style={{ cursor: "se-resize" }} />
        <div className="middle top" style={{ cursor: "n-resize", width: boxWidth - 20 - 20 + "px" }} />
        <div className="middle right" style={{ cursor: "e-resize", height: boxHeight - 20 - 20 + "px" }} />
        <div className="middle bottom" style={{ cursor: "s-resize", width: boxWidth - 20 - 20 + "px" }} />
        <div className="middle left" style={{ cursor: "w-resize", height: boxHeight - 20 - 20 + "px" }} />
        {this.props.children}
      </div>
    );
  }
}

export default DragSize;
