import React from 'react';
import ReactDOM from 'react-dom';
import './PictureInPicture.css';

const portalRoot = document.getElementById('portal-root');

export class PictureInPicture extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add('picture-in-picture');
  }

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
