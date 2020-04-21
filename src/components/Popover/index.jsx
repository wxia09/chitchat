import React from "react";

class Popover extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          onClick: function () {
            alert(1);
          },
        })}
      </div>
    );
  }
}

export default React.memo(Popover);
