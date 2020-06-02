import React, { Component } from 'react';
import Content from './component/Content'
import Logout from './component/Logout'
import Scroll from './component/Scroll'
import Sidebar from './component/Sidebar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Content/>
        <Logout/>
        <Scroll/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;