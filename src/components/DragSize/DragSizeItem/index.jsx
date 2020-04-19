import React, { memo } from "react";
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
      let x = nowX - pageX;
      let y = nowY - pageY;
      if (/^((top|bottom).)?right$/.test(type)) {
        x *= -1;
      }
      if (/^bottom(.(right|left))?$/.test(type)) {
        y *= -1;
      }
      let width = Math.min(boxWidth - x, widowsWidth - left - 2);
      width = Math.max(width, 0);
      let height = Math.min(boxHeight - y, widowsHeight - top);
      height = Math.max(height, 0);
      let _left = Math.max(left + x, 0);
      let _top = Math.max(top + y, 0);
      handleSize({
        boxWidth: width,
        boxHeight: height,
        left: _left,
        top: _top,
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
// 使用memo不起作用, 是因为数据依赖的关系, 因为所有都依赖于盒子的宽高, 而且这个数据是必传的
export default memo(DragSizeItem);
