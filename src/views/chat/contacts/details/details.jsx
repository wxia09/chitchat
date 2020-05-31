import React from "react";

import { connect } from "react-redux";

import { http } from "../../../../utils/http";

class Details extends React.PureComponent {
  state = {
    currentSelFriendData: {},
  };
  componentDidMount() {
    http("friend/detail", { params: { id: this.props.currentSelFriendId } })
      .then((res) => {
        this.setState({
          currentSelFriendData: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <section>
        <div>我是联系人详情页</div>
      </section>
    );
  }
}

export default connect(function mapStateToProps(state) {
  return {
    currentSelFriendId: state.friends.currentSelFriendId,
  };
})(Details);
