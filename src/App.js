import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      timer: 0,
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 10 })
    }, 10)
  }

  render() {
    const renderAfter = sec => (sec * 1000 < this.state.timer)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>0 Second Render</p>
        {renderAfter(2) && <p>2 Second Render</p>}
        {renderAfter(4) && <p>4 Second Render</p>}
        {renderAfter(5) && <p>5 Second Render</p>}
        {this.state.timer}
      </div>
    );
  }
}

export default App;
