import React, { Component } from "react";
import { connect } from "react-redux";
import "./scss/index.scss";
import Popover from "../../components/Popover";
import { CURRENT_SLIDER_STATUS } from "../../reducers/chat/types";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconList: [
        {
          icon: "friends02",
          tip: "信息",
          active: true,
        },
        {
          icon: "friend1",
          tip: "通讯录",
          active: false,
        },
      ],
      oldIconIndex: 0,
    };
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive(index) {
    let { iconList, oldIconIndex } = this.state;
    if (oldIconIndex === index) return;
    let array = [...iconList];
    let item = { ...array[index] };
    item.active = !item.active;
    if (oldIconIndex > -1) {
      let oldItem = { ...array[oldIconIndex] };
      oldItem.active = false;
      array.splice(oldIconIndex, 1, oldItem);
    }
    array.splice(index, 1, item);
    this.props.setCurrentSliderStatus(index);
    this.setState({
      iconList: array,
      oldIconIndex: index,
    });
  }
  render() {
    let { userInfo } = this.props;
    let { iconList } = this.state;
    return (
      <div className="sidebar">
        <div style={{ height: "25px" }} />
        <Popover content={userInfo.create_at} title={userInfo.name}>
          <div className="avatar">
            <span />
            <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" width="40" height="40" />
          </div>
        </Popover>
        {iconList.map((item, index) => (
          <div
            className="slider-icon text-center cursor-pointer"
            onClick={() => {
              this.handleActive(index);
            }}
            key={index}
          >
            <i className={"iconfont icon-" + item.icon + (item.active ? " active" : "")} />
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      userInfo: state.defaultReducer.userInfo,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      setCurrentSliderStatus: (v) => dispatch({ value: v, type: CURRENT_SLIDER_STATUS }),
    };
  }
)(Sidebar);
