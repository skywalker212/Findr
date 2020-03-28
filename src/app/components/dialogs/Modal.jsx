import { Component } from 'react';

export default class Modal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalActive: props.active === true ? true : false
    }
  }

  getApplicationNode = () => {
    return document.getElementById(this.props.applicationNode);
  }

  activateModal = () => {
    this.setState({ modalActive: true });
  };

  deactivateModal = () => {
    this.setState({ modalActive: false });
  };
}