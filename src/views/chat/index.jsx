import React from "react";
import { connect } from "react-redux";

// import Roof from "./roof";
import Messages from "./messages";
import List from "./list";
import Contacts from "./contacts";
import ContactsDetails from "./contacts/details/details";
import ContactsApplyList from "./contacts/details/list";
import { Title } from "./components/item";

import { CURRENT_SLIDER_STATUS } from "../../reducers/chat/types";
import { APPLY_LIST_OR_DETAILS } from "../../reducers/friends/types";

import "./scss/index/index.scss";

class Chat extends React.PureComponent {
  render() {
    let { props } = this;
    // 不知道这里为什么非得这么写, 不然会报一个警告, 可能是因为语法规范吧
    // Warning: Functions are not valid as a React child.
    // This may happen if you return a Component instead of <Component /> from render.
    // Or maybe you meant to call this function rather than return it.
    let ShowList = [List, Contacts][props.currentSliderStatus];
    let Info = [Messages, props.applyListOrDetails ? ContactsDetails : ContactsApplyList][props.currentSliderStatus];
    let title = ["xxx", "详细信息"][props.currentSliderStatus];
    return (
      <div className="flex chat flex-sub">
        <div className="list">
          {/*<Roof />*/}
          <ShowList />
        </div>
        <div className="flex-sub flex flex-direction">
          <Title title={title}>
            <Info />
          </Title>
        </div>
      </div>
    );
  }
}

export default connect(function mapStateToProps(state) {
  return {
    currentSliderStatus: state.chat[CURRENT_SLIDER_STATUS],
    applyListOrDetails: state.friends[APPLY_LIST_OR_DETAILS],
  };
})(Chat);
