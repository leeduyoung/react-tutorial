import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Collapse } from 'react-bootstrap';
// import './IssuePage';

class App extends Component {

  // showDetail = false;

  toggleButton() {
    console.log('toggleButton');
    // showDetail = !showDetail;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React2</h1>
        </header>
        <div>
          <button onClick={this.toggleButton}>toggle</button>
        </div>
        <div>
          <Button bsStyle="success">bootstrap default button</Button>
        </div>
        <div>
          <Collapse in={true}>
            <Button bsStyle="primary">bootstrap toggle button</Button>
          </Collapse>
        </div>
        {/* <div>
          <IssuePage />
        </div> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
