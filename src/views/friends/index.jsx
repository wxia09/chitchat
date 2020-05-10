import React, { Component } from "react";
import "./scss/index.scss";
import { FriendList } from "./component/item";
import Dialog from "../../components/Dialog";
import Popover from "../../components/Popover";

import { http } from "../../utils/http";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddFriend: false,
      inputValue: "12",
      extendList: [],
    };
    this.handleShowAddFriend = this.handleShowAddFriend.bind(this);
    this.handlerValue = this.handlerValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
  render() {
    return (
      <>
        <div className={"friend"}>
          <div className={"search"}>
            <span className="iconfont icon-search" />
            <input type="text" />
            <span className="iconfont icon-add" onClick={this.handleShowAddFriend} />
          </div>
          <FriendList />
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
              <FriendList item={item} key={item.id}>
                <div className="flex-sub" />
                <Popover trigger="hover">
                  <i className="iconfont icon-add cursor-pointer" />
                  <div className="friend-add-btn">添加</div>
                </Popover>
              </FriendList>
            ))}
          </section>
        </Dialog>
      </>
    );
  }
}

export default Friends;
