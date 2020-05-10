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
    trigger: PropsType.string,
  };

  static defaultProps = {
    wrap: "",
    placement: "bottom",
    content: "",
    title: "",
    trigger: "click",
  };
  handleHide() {
    this.setState({
      show: false,
    });
  }
  handleTrigger() {
    const self = this;
    switch (this.props.trigger) {
      case "click":
        return {
          onClick() {
            self.handleShow(() => {
              document.onclick = function () {
                self.handleHide();
                document.onclick = null;
              };
            });
          },
        };
      case "hover":
        return {
          onMouseEnter() {
            self.handleShow();
          },
          onMouseLeave(e) {
            self.handleHide();
          },
        };
      default:
        break;
    }
  }
  handleShow(cb = () => {}) {
    this.setState(
      {
        show: true,
      },
      cb
    );
  }

  componentDidMount() {}

  render() {
    let { props } = this;
    if (!props.children) {
      throw new Error("必须传子组件");
    }
    let showClassName = this.state.show ? "show transition " : "hide ";
    let children = props.children instanceof Array ? [...props.children] : [props.children];
    let firstChild = children.splice(0, 1)[0];
    return (
      <div className="popover">
        {React.cloneElement(firstChild, this.handleTrigger())}
        {children.length ? (
          React.cloneElement(children[0], {
            className: showClassName + (children[0].props.className || "") + " " + props.wrap,
          })
        ) : (
          <div className={showClassName + "wrap " + props.placement}>
            <div className={"title border-bottom"}>{props.title}</div>
            <div className={"content"}>{props.content}</div>
          </div>
        )}
      </div>
    );
  }
}

export default React.memo(Popover);
