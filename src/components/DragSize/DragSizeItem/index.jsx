import React from "react";
function onMouseDown(e, props) {
  let { boxWidth, boxHeight, left, top, widowsWidth, widowsHeight } = props;
  console.log(e);
  let { pageX, pageY } = e;
  document.onmousemove = (el) => {
    let nowX = el.pageX;
    let nowY = el.pageY;
    this.setState({
      boxWidth: Math.min(boxWidth - (nowX - pageX), widowsWidth),
      boxHeight: Math.min(boxHeight - (nowY - pageY), widowsHeight),
      left: Math.max(left + (nowX - pageX), 0),
      top: Math.max(top + (nowY - pageY), 0),
    });
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
}
const CanBox = (props) => {
  return <div onMouseDown={(e) => onMouseDown(e, props)} />;
};

export default CanBox;
