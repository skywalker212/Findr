import React, { Fragment } from 'react';
import './App.css';
import Map from './components/map/Map';
import Nav from './components/Navbar/Navbar';
import LocationModal from './components/dialogs/Login/Login';
import { connect } from 'react-redux';
import NotificationModal from './components/notification/Notification';

function App(props) {
  return (
    <Fragment>
      <div id="findr-root">
        <div id="location-dialog">
          <LocationModal applicationNode="location-dialog"/>
        </div>
        { props.notifications ? <div id="notification-dialog"><NotificationModal applicationNode="notification-dialog" data={props.notifications}/></div> : false }
        <Nav className="main-nav"/>
        <Map className="main-content"/>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return { notifications: state.notifications.value }
}

export default connect(mapStateToProps)(App);