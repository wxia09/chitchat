import React, { Component } from "react";
import { connect } from "react-redux";
import "../scss/contacts/index.scss";
import { Item } from "../components/item";
import Roof from "../roof";

class Contacts extends Component {
  render() {
    return (
      <div className={"friend"}>
        <Roof />
        <Item />
      </div>
    );
  }
}

export default connect(function mapStateToProps(state) {
  return {
    userInfo: state.defaultReducer.userInfo,
  };
})(Contacts);
