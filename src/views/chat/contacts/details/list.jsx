import React from "react";
import { connect } from "react-redux";

import { http } from "../../../../utils/http";

import { setFriendsApplyList } from "../../../../reducers/friends/thunk";

import { Item } from "../../components/item";
import Popover from "../../../../components/Popover";

import "../../scss/contacts/detail/index.scss";

class ApplyList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.friendApplyAgree = this.friendApplyAgree.bind(this);
  }
  friendApplyAgree({ id }) {
    http("friend/apply/agree", { params: { id } })
      .then((res) => {
        alert(res.data.message);
        this.props.dispatch(setFriendsApplyList);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.props.dispatch(setFriendsApplyList);
  }
  render() {
    let { props } = this;
    return (
      <>
        {props.friendsApplyList.map((item) => (
          <Item item={item} key={item.id}>
            <span className="flex-sub" />
            <Popover trigger="hover">
              <i className="iconfont icon-confirm cursor-pointer" onClick={() => this.friendApplyAgree(item)} />
              <div className="friend-add-btn">添加</div>
            </Popover>
          </Item>
        ))}
      </>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      friendsApplyList: state.friends.friendsApplyList,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }
)(ApplyList);
