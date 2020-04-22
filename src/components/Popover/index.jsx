import React from "react";

class Popover extends React.Component {
  componentDidMount() {}
  render() {
    let { props } = this;
    let children = props.children instanceof Array ? [...props.children] : [props.children];
    let firstChild = children.splice(0, 1)[0];
    return (
      <div>
        {React.cloneElement(firstChild, {
          onClick: function () {
            alert(1);
          },
        })}
        {children.map((item, index) => React.cloneElement(item, { key: index + "item" }))}
      </div>
    );
  }
}

export default React.memo(Popover);
