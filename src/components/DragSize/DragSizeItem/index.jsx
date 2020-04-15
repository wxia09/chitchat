import React from "react";
import "./scss/index.scss";
function onMouseDown(e, props) {}
class DragSizeItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onMouseDown = this.onMouseDown.bind(this);
  }
  onMouseDown(e) {
    let { boxWidth, boxHeight, left, top, widowsWidth, widowsHeight } = this.props;
    let { pageX, pageY } = e;
    document.onmousemove = (el) => {
      let nowX = el.pageX;
      let nowY = el.pageY;
      this.props.changeStyle = {
        boxWidth: Math.min(boxWidth - (nowX - pageX), widowsWidth),
        boxHeight: Math.min(boxHeight - (nowY - pageY), widowsHeight),
        left: Math.max(left + (nowX - pageX), 0),
        top: Math.max(top + (nowY - pageY), 0),
      };
      // this.setState({ changeStyle });
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
  render() {
    let props = this.props;
    return (
      <div
        className={props.cssStyle}
        style={{ ...props.inlineStyle }}
        onMouseDown={(e) => this.onMouseDown(e, props)}
      />
    );
  }
}
export default DragSizeItem;
