import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal } from './Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={() => this.modal.open()}>open</button>
          <Modal ref={this.modalRef}>
            Hello from the other side
            <button onClick={() => this.modal.close()}>close</button>
          </Modal>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  modalRef = modal => (this.modal = modal);
}

export default App;
