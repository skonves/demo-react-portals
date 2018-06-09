import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const portalRoot = document.getElementById('portal-root');

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add('modal');
    this.el.classList.add('hidden');
    this.state = { isOpen: true };
  }

  open = () => {
    this.el.classList.remove('hidden');
  };

  close = () => {
    this.el.classList.add('hidden');
  };

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
