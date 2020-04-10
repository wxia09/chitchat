import React , {Component} from 'react';
import Sidebar from "../sidebar";
import Friends from "../friends";
import News from "../news";

class Index extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Friends />
        <News />
      </div>
    )
  }
}

export default Index;
