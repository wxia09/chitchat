import React from "react";
import "./scss/index.scss";

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
  }
  handleShow() {
    const self = this;
    this.setState(
      {
        show: !this.state.show,
      },
      () => {
        document.onclick = function () {
          self.setState({
            show: false,
          });
          document.onclick = null;
        };
      }
    );
  }
  componentDidMount() {}
  render() {
    let { props } = this;
    if (!props.children) {
      throw new Error("必须传子组件");
    }
    let children = props.children instanceof Array ? [...props.children] : [props.children];
    let firstChild = children.splice(0, 1)[0];
    return (
      <div className="popover">
        {React.cloneElement(firstChild, {
          onClick: this.handleShow,
        })}
        <div className={(this.state.show ? "show " : "") + "wrap"}>
          <div className={"title border-bottom"}>{props.title}</div>
          <div className={"content"}>{props.content}</div>
        </div>
      </div>
    );
  }
}

export default React.memo(Popover);
