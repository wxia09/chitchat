import React from "react";
import { connect } from "react-redux";

import { http } from "../../../../utils/http";
import { FRIEND_APPLY_LIST } from "../../../../reducers/firends/types";

class ApplyList extends React.PureComponent {
  componentDidMount() {
    http("friend/apply/list")
      .then((res) => {
        this.props.setFriendApplyList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>我是申请列表</div>;
  }
}

export default connect(
  function mapStateToProps(state) {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {
      setFriendApplyList: (v) => dispatch({ type: FRIEND_APPLY_LIST, value: v }),
    };
  }
)(ApplyList);
