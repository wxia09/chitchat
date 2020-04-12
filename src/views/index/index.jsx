import React, { Component } from "react";
import Sidebar from "../sidebar";
import Friends from "../friends";
import News from "../news";
import DragSize from "../../components/DragSize";

class Index extends Component {
  render() {
    return (
      <DragSize>
        <Sidebar />
        <Friends />
        <News />
      </DragSize>
    );
  }
}

export default Index;
