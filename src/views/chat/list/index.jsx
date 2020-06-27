// 联系人列表(历史)
import React from "react";
import { Item } from "../components/item";
import Roof from "../roof";

import { getLinksList } from "../../../reducers/chat/thunk";
import { connect } from "react-redux";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.handlerChatWin = this.handlerChatWin.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getLinksList);
  }
  handlerChatWin(index) {
    this.setState({
      currentIndex: index,
    });
  }
  render() {
    return (
      <div>
        <Roof />
        {this.props.linksList.map((item, index) => (
          <Item
            item={item}
            key={item.id}
            nameKey="sendName"
            badge={true}
            badgeKey="unread_count"
            active={this.state.currentIndex === index}
            onClick={this.handlerChatWin.bind(index)}
          />
        ))}
      </div>
    );
  }
}

export default connect(function mapStateToProps(state) {
  return {
    linksList: state.chat.linksList,
  };
})(List);
