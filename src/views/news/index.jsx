import React, {Component} from "react";
import Chat from  "../chat";
import InputBox from "../inputBox";

class News extends Component{
  render() {
    return (
      <div>
        <Chat />
        <InputBox />
      </div>
    )
  }
}

export default News;
