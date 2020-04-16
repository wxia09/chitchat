import React from "react";
import PropsType from "prop-types";
import DragSizeItem from "./DragSizeItem";
import "./scss/index.scss";
import { items } from "./data/data";

class DragSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widowsWidth: 0,
      widowsHeight: 0,
      boxWidth: 0,
      boxHeight: 0,
    };
    this.handleSize = this.handleSize.bind(this);
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
    cornerWidth: PropsType.number,
    cornerHeight: PropsType.number,
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
    cornerWidth: 20,
    cornerHeight: 20,
    middleWidth: 10,
    middleHeight: 10,
  };
  componentDidMount() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let boxWidth = width * 0.6;
    let boxHeight = height * 0.8;
    let left = (width - boxWidth) / 2;
    let top = (height - boxHeight) / 2;
    let right = left;
    let bottom = top;
    this.setState({
      widowsWidth: width,
      widowsHeight: height,
      boxWidth,
      boxHeight,
      left,
      top,
      right,
      bottom,
    });
  }
  handleSize({ boxWidth, boxHeight, left, top, right, bottom, type }) {
    switch (type) {
      case "top.left":
        this.setState({
          boxWidth,
          boxHeight,
          left,
          top,
        });
        break;
      case "top.right":
        this.setState({
          boxWidth,
          boxHeight,
          right,
          top,
        });
        break;
      case "bottom.left":
        this.setState({
          boxWidth,
          boxHeight,
          bottom,
          left,
        });
        break;
      case "bottom.right":
        this.setState({
          boxWidth,
          boxHeight,
          right,
          bottom,
        });
        break;
      case "top":
        this.setState({
          boxHeight,
          top,
        });
        break;
      case "left":
        this.setState({
          boxWidth,
          left,
        });
        break;
      case "right":
        this.setState({
          boxWidth,
          right,
        });
        break;
      case "bottom":
        this.setState({
          boxHeight,
          bottom,
        });
        break;
      default:
        break;
    }
  }
  render() {
    let { boxWidth, boxHeight, widowsWidth, widowsHeight, top, right, left, bottom } = this.state;
    let { cornerWidth, cornerHeight, middleHeight, middleWidth } = this.props;
    let boxStyle = {
      position: "relative",
      width: boxWidth + "px",
      height: boxHeight + "px",
      top: top + "px",
      left: left + "px",
      bottom,
      right,
    };
    let params = {
      boxHeight,
      boxWidth,
      widowsHeight,
      widowsWidth,
      cornerWidth,
      cornerHeight,
      middleHeight,
      middleWidth,
      left,
      top,
      bottom,
      right,
    };
    return (
      <div className="flex drag-size" style={boxStyle}>
        {items.map((item, index) => (
          <DragSizeItem
            cssStyle={item.cssStyle}
            key={index}
            type={item.type}
            handleSize={this.handleSize}
            {...params}
            inlineStyle={{ cursor: item.cursor }}
          />
        ))}
        {this.props.children}
      </div>
    );
  }
}

export default DragSize;
