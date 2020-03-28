import React, { Fragment } from 'react';
import './App.css';
import Map from './components/map/Map';
import Nav from './components/Navbar/Navbar';
import LocationModal from './components/dialogs/Login/Login';
import mapConfig from './../config/map.config';

function App() {
  return (
    <Fragment>
      <div id="findr-root">
        <div id="location-dialog">
          <LocationModal applicationNode="location-dialog"/>
        </div>
        <Nav className="main-nav"/>
        <Map className="main-content" map={mapConfig}/>
      </div>
    </Fragment>
  );
}

export default App;
