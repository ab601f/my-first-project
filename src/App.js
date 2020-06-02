import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString(),
    };
  }

  // 在Component render到真實DOM中，使用ComponentDidMount，
  // 並在裡面使用setInterVal，並將回傳的計時器id存放在timerId中
  componentDidMount() {
    console.log('componentDidMount');
    this.timerId = setInterval( this.updateTime, 1000);
  }

  // 在component即將從真實DOM中移除之前，使用componentWillUnmount
  // 使用clearInterval把timerId移除掉
  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }

  // 宣告update時間的方法
  updateTime = () => {
    this.setState({
      currentTime: new Date().toLocaleString(),
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.title != prevState.title) {
      return {
        title: nextProps.title 
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) { 
    console.log('shouldComponentUpdate');
    if (this.state.title != nextState.title) { 
      return true;
    } 
    return false
  }

  render() {
    const { currentTime } = this.state;
    return ( 
      <div style = {{ textAlign: 'center' }} >
        <div>{currentTime}</div>
      </div>
    );
  }
}

export default App;