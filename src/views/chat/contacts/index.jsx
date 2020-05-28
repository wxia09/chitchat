import React, { Component } from "react";
import { connect } from "react-redux";
import "../scss/contacts/index.scss";
import { Item } from "../components/item";
import Roof from "../roof";

import { http } from "../../../utils/http";

import { FRIENDS_LIST } from "../../../reducers/firends/types";

class Contacts extends Component {
  componentDidMount() {
    http("friend/list")
      .then((res) => {
        let data = res.data.data;
        this.props.setFriendsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleClick(index) {
    console.log(index);
  }
  render() {
    return (
      <div className={"friend"}>
        <Roof />
        <Item item={{ name: "新的朋友" }} onClick={this.handleClick.bind(this, 0)} />
        {this.props.friendsList.map((item) => (
          <Item item={item} key={item.id} onClick={this.handleClick.bind(this, 1)} />
        ))}
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      userInfo: state.defaultReducer.userInfo,
      friendsList: state.friends.friendsList,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      setFriendsList: (v) => dispatch({ type: FRIENDS_LIST, value: v }),
    };
  }
)(Contacts);
