import React, { Fragment } from 'react';
import Spinner from './../../../spinner/Spinner';
import './Location.css';

export default (props) => {
  return (
    props.loading ?
      (<div className="location-modal-spinner-parent">
        <div>Loading...</div>
        <Spinner className="la-dark"/>
      </div>)
    : (
      props.locationSupport ?
        <Fragment>
          <div className="modal-body">
            <h1>Please give us location access</h1>
          </div>
          <footer className="modal-footer">
            <button id="location-modal-give-access" className="nes-btn is-success" onClick={props.setLocation}>
              Sure!
            </button>
            <button id="location-modal-cancel" className="nes-btn is-error" onClick={props.denyLocation}>
              NO
            </button>
          </footer>
        </Fragment>
      : <p id="location-modal-confirm-location">Your browser does not support geolocation</p>
    )
  );
}