import React, { Component } from 'react';
import Content from './components/Content'
import Logout from './components/Logout'
import Scroll from './components/Scroll'
import Sidebar from './components/Sidebar'
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