// 顶部窗口, 任何时候都会存在, 只是返回的状态有所不同
// +按钮在朋友列表时候出来
import React, { Component } from "react";
import { connect } from "react-redux";

import "../scss/roof/index.scss";
import Dialog from "../../../components/Dialog";
import { Item } from "../components/item";
import Popover from "../../../components/Popover";
import { http } from "../../../utils/http";

class Roof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddFriend: false,
      inputValue: "12",
      extendList: [],
      selFriend: {},
      confirmAdd: false,
      confirmApplyFriendValue: "",
    };
    this.handleShowAddFriend = this.handleShowAddFriend.bind(this);
    this.handlerValue = this.handlerValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleConfirmAdd = this.handleConfirmAdd.bind(this);
    this.handleConfirmApplyFriend = this.handleConfirmApplyFriend.bind(this);
    this.handlerConfirmApplyFriendValue = this.handlerConfirmApplyFriendValue.bind(this);
  }
  handleShowAddFriend() {
    this.setState({
      showAddFriend: !this.state.showAddFriend,
    });
  }
  handlerValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleSearch() {
    http("/friend/extend", { params: { keywords: this.state.inputValue } }).then((res) => {
      this.setState({
        extendList: res.data.data,
      });
    });
  }
  handlerSelFriend(item) {
    let obj = {
      name: item.name,
      nickname: item.nickname,
      avatar: item.avatar,
      user_id: this.props.userInfo.id,
      age: item.age,
      gender: item.gender,
      mobile: item.mobile,
      apply_id: item.id,
    };
    this.setState({
      selFriend: obj,
    });
    this.handleConfirmAdd();
  }
  handleConfirmAdd() {
    this.setState({
      confirmAdd: !this.state.confirmAdd,
    });
  }

  handlerConfirmApplyFriendValue(e) {
    this.setState({
      confirmApplyFriendValue: e.target.value,
    });
  }
  handleConfirmApplyFriend() {
    http("friend/apply", {
      params: {
        message: this.state.confirmApplyFriendValue,
        ...this.state.selFriend,
      },
    }).then((res) => {
      let { status, message } = res.data;
      if (status === "success") {
        alert(message);
        this.handleConfirmAdd();
      }
    });
  }
  render() {
    return (
      <>
        <div className="search flex align-center">
          <div className="input flex-sub">
            <span className="iconfont icon-search" />
            <input type="text" />
          </div>
          {/*这里在input有焦点或者是input内有值得时候, 需要把右边的add换成确定, 值需要暴露出去*/}
          <span className="iconfont icon-add add-button" onClick={this.handleShowAddFriend} />
        </div>
        <Dialog
          show={this.state.showAddFriend}
          title="添加好友"
          width="800px"
          height="600px"
          cancel={this.handleShowAddFriend}
        >
          <section className="search-friends">
            <input
              type="text"
              placeholder="请输入添加好的账号/昵称/姓名"
              className="search-input"
              value={this.state.inputValue}
              onChange={this.handlerValue}
            />
            <button className="search-btn" onClick={this.handleSearch}>
              检索
            </button>
          </section>
          <section className={"extend-list"}>
            {this.state.extendList.map((item) => (
              <Item item={item} key={item.id}>
                <div className="flex-sub" />
                <Popover trigger="hover">
                  <i
                    className="iconfont icon-add cursor-pointer"
                    onClick={() => {
                      this.handlerSelFriend(item);
                    }}
                  />
                  <div className="friend-add-btn">添加</div>
                </Popover>
              </Item>
            ))}
          </section>
        </Dialog>
        <Dialog
          show={this.state.confirmAdd}
          title={"添加 " + this.state.selFriend.name}
          width="400px"
          height="300px"
          cancel={this.handleConfirmAdd}
        >
          <section className="confirm-message">
            <input
              type="text"
              value={this.state.confirmApplyFriendValue}
              onChange={this.handlerConfirmApplyFriendValue}
            />
            <button onClick={this.handleConfirmApplyFriend}>确认添加</button>
          </section>
        </Dialog>
      </>
    );
  }
}

export default connect(function mapStateToProps(state) {
  return {
    userInfo: state.defaultReducer.userInfo,
  };
})(Roof);
