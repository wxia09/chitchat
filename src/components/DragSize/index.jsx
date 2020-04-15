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
    let { boxWidth, boxHeight, left, top, widowsWidth, widowsHeight } = this.state;
    let { middleWidth, middleHeight, cornerWidth, cornerHeight, changeStyle } = this.props;
    console.log(changeStyle);
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
      top,
      left,
    };
    return (
      <div className="flex drag-size" style={boxStyle}>
        <DragSizeItem
          cssStyle="top left corner"
          inlineStyle={{ cursor: "nw-resize", width: cornerWidth + "px", height: cornerHeight + "px" }}
          {...params}
          type="top left"
        />
        <DragSizeItem
          cssStyle="top right corner"
          inlineStyle={{ cursor: "ne-resize", width: cornerWidth + "px", height: cornerHeight + "px" }}
          {...params}
          type="top right"
        />
        <DragSizeItem
          cssStyle="bottom left corner"
          inlineStyle={{ cursor: "sw-resize", width: cornerWidth + "px", height: cornerHeight + "px" }}
          {...params}
          type="bottom left"
        />
        <DragSizeItem
          cssStyle="bottom right corner"
          inlineStyle={{ cursor: "se-resize", width: cornerWidth + "px", height: cornerHeight + "px" }}
          {...params}
          type="bottom right"
        />
        <DragSizeItem
          cssStyle="middle top"
          type="top"
          {...params}
          inlineStyle={{
            cursor: "n-resize",
            width: boxWidth - cornerHeight - cornerWidth + "px",
            height: middleHeight + "px",
          }}
        />
        <DragSizeItem
          cssStyle="middle right"
          type="right"
          {...params}
          inlineStyle={{
            cursor: "e-resize",
            height: boxHeight - cornerHeight - cornerWidth + "px",
            width: middleWidth + "px",
          }}
        />
        <DragSizeItem
          cssStyle="middle bottom"
          type="bottom"
          {...params}
          inlineStyle={{
            cursor: "s-resize",
            width: boxWidth - cornerHeight - cornerWidth + "px",
            height: middleHeight + "px",
          }}
        />
        <DragSizeItem
          cssStyle="middle left"
          type="left"
          {...params}
          inlineStyle={{
            cursor: "w-resize",
            height: boxHeight - cornerHeight - cornerWidth + "px",
            width: middleWidth + "px",
          }}
        />
        {this.props.children}
      </div>
    );
  }
}

export default DragSize;
