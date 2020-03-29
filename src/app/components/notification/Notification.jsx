import React from 'react';
import AriaModal from 'react-aria-modal';
import RootModal from './../dialogs/Modal';
import './Notification.css';
import { clearNotification } from './../../store/reducers/notification/notificationSlice';
import { connect } from 'react-redux';

class Modal extends RootModal {
  render () {
    return (<AriaModal
      titleText="Notification Modal"
      initialFocus="#notification-confirm-button"
      getApplicationNode={this.getApplicationNode}
      underlayClickExits={false}
      verticallyCenter={true}
      underlayStyle={this.props.style}
    >
      <div id="notification-dialog-root" className="nes-dialog is-rounded modal custom-pointer">
        <p className="nes-text">{this.props.data.message}</p>
        <button id="notification-confirm-button" className="nes-btn is-primary" onClick={this.props.clearNotification}>Okay!</button>
      </div>
    </AriaModal>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearNotification: () => dispatch(clearNotification())
})

export default connect(undefined, mapDispatchToProps)(Modal);