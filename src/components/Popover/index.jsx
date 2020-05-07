import React from "react";
import "./scss/index.scss";
import PropsType from "prop-types";

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
  }

  static propsType = {
    wrap: PropsType.string,
    placement: PropsType.string,
    content: PropsType.string,
    title: PropsType.string,
  };

  static defaultProps = {
    wrap: "",
    placement: "bottom",
    content: "",
    title: "",
  };

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
        {children.length ? (
          React.cloneElement(children[0], {
            className: (this.state.show ? "show " : "hide ") + (children[0].props.className || "") + " " + props.wrap,
          })
        ) : (
          <div className={(this.state.show ? "show " : "hide ") + "wrap " + props.placement}>
            <div className={"title border-bottom"}>{props.title}</div>
            <div className={"content"}>{props.content}</div>
          </div>
        )}
      </div>
    );
  }
}

export default React.memo(Popover);
