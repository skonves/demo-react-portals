import React from 'react';
import ReactDOM from 'react-dom';

export class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal();
  }
}

/*
  ==== 1 ====
  render() {
    return ReactDOM.createPortal();
  }

  ==== 2 ====

  <div id="portal-root"></div>

  const portalRoot = document.getElementById('portal-root');

  ==== 3 ====
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  ==== 4 ====

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  ==== 6 ====
  import './Modal.css';
  ====
    this.el.classList.add('modal');
    this.el.classList.add('hidden');
  ====
  open = () => {
    this.el.classList.remove('hidden');
  };

  close = () => {
    this.el.classList.add('hidden');
  };

*/
