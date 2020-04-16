import React from "react";
import "./scss/index.scss";
class DragSizeItem extends React.Component {
  constructor(props) {
    super(props);
    let { widowsWidth, widowsHeight } = this.props;
    this.state = {
      widowsWidth,
      widowsHeight,
    };
    this.props = props;
    this.onMouseDown = this.onMouseDown.bind(this);
  }
  onMouseDown(e) {
    let { boxWidth, boxHeight, left, top, widowsWidth, widowsHeight, handleSize, type } = this.props;
    let { pageX, pageY } = e;
    document.onmousemove = (el) => {
      let nowX = el.pageX;
      let nowY = el.pageY;
      let width = Math.min(boxWidth - (nowX - pageX), widowsWidth);
      let height = Math.min(boxHeight - (nowY - pageY), widowsHeight);
      let _left = Math.max(left + (nowX - pageX), 0);
      let _top = Math.max(top + (nowY - pageY), 0);
      handleSize({
        boxWidth: width,
        boxHeight: height,
        left: _left,
        top: _top,
        right: Math.max(widowsWidth - width - _left, 0),
        bottom: Math.max(widowsHeight - height - _top, 0),
        type,
      });
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
  render() {
    let props = this.props;
    let { boxWidth, boxHeight, middleWidth, middleHeight, cornerWidth, cornerHeight, type } = props;
    let boxStyle = {};
    if (/^(top.left|top.right|bottom.left|bottom.right)/gi.test(type)) {
      boxStyle = {
        width: cornerWidth + "px",
        height: cornerHeight + "px",
      };
    } else if (/^(left|right)/gi.test(type)) {
      boxStyle = {
        width: middleWidth + "px",
        height: boxHeight - cornerHeight * 2 + "px",
      };
    } else if (/^(top|bottom)/gi.test(type)) {
      boxStyle = {
        width: boxWidth - cornerWidth * 2 + "px",
        height: middleHeight + "px",
      };
    }
    return (
      <div
        className={props.cssStyle}
        style={{ ...props.inlineStyle, ...boxStyle }}
        onMouseDown={(e) => this.onMouseDown(e, props)}
      />
    );
  }
}
export default DragSizeItem;
