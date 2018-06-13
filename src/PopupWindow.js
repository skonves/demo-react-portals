import React from 'react';
import ReactDOM from 'react-dom';

export class PopupWindow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.window = null;

    this.state = { mounted: false };
  }

  render() {
    if (!this.state.mounted) return null;
    return ReactDOM.createPortal(this.props.children, this.container);
  }

  componentDidMount() {
    this.window = window.open('', '', 'width=640,height=480');
    this.window.document.body.appendChild(this.container);
    this.window.onunload = this.props.onClose;
    this.setState({ mounted: true }, () => {
      this.props.onOpen && this.props.onOpen();
    });
  }

  componentWillUnmount() {
    if (this.window) {
      this.window.close();
    }
  }
}
