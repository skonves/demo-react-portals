import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  // ref
}

export default App;

/*
  ==== 5 ====
  import { Modal } from './Modal';
  ===
  <Modal>Hello from the other side</Modal>

  ==== 7 ====
  modal = React.createRef();

  <button onClick={() => this.modal.current.open()}>open</button>
  <Modal ref={this.modal}>
    Hello from the other side
    <button onClick={() => this.modal.current.close()}>close</button>
  </Modal>
*/
