import React, { Component } from "react";
import "./scss/index.scss";
import { FriendList } from "./component/item";
import Dialog from "../../components/Dialog";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddFriend: false,
    };
    this.handleShowAddFriend = this.handleShowAddFriend.bind(this);
  }
  handleShowAddFriend() {
    this.setState({
      showAddFriend: !this.state.showAddFriend,
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
        <Dialog show={this.state.showAddFriend} title="添加好友" width="800px" height="600px">
          <section className="search-friends">
            <input type="text" placeholder="请输入添加好的账号/昵称/姓名" className="search-input" />
            <button className="search-btn">检索</button>
          </section>
        </Dialog>
      </>
    );
  }
}

export default Friends;
