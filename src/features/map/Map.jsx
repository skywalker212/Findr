import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import './Map.css';

class Map extends Component {
  state = {
    lat: 37.7749,
    lng: -122.4194,
    zoom: 13,
  }
  render () {
    return (
      <LeafletMap 
        center={[this.state.lat, this.state.lng]} 
        zoom={this.state.zoom} 
        style={{ width: '100%', height: '100vh'}}
      >
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    );
  }
}

export default Map;