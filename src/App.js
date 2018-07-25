import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {

  test() {
    console.log('test');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React2</h1>
        </header>
        <div>
          <button onClick={this.test}>default</button>
        </div>
        <div>
          <Button bsStyle="success">bootstrap default button</Button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
