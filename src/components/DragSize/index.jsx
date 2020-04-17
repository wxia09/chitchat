import React from "react";
import DragSizeItem from "./DragSizeItem";
import "./scss/index.scss";
import { items } from "./data/data";
import { propsType, defaultProps } from "./props";

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
  static propsType = propsType;
  static defaultProps = defaultProps;
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
  handleSize({ boxWidth, boxHeight, left, top, type }) {
    let obj = {};
    if (/top/.test(type)) {
      obj = {
        boxHeight,
        top,
      };
    }
    if (/left/.test(type)) {
      obj = {
        ...obj,
        boxWidth,
        left,
      };
    }
    if (/right/.test(type)) {
      obj = {
        ...obj,
        boxWidth,
      };
    }
    if (/bottom/.test(type)) {
      obj = {
        ...obj,
        boxHeight,
      };
    }
    this.setState({
      ...obj,
    });
  }
  render() {
    let { boxWidth, boxHeight, widowsWidth, widowsHeight, top, left } = this.state;
    let { cornerWidth, cornerHeight, middleHeight, middleWidth } = this.props;
    let boxStyle = {
      position: "relative",
      width: boxWidth + "px",
      height: boxHeight + "px",
      top: top + "px",
      left: left + "px",
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
