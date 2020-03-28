import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map as LeafletMap, TileLayer, ZoomControl } from 'react-leaflet'
import './Map.css';

class Map extends Component {

  render () {
    return (
      <LeafletMap 
        center={this.props.location ? [this.props.location.lat, this.props.location.lng] : [this.props.map.lat, this.props.map.lng]} 
        zoom={this.props.map.zoom} 
        style={this.props.map.style}
        className={this.props.className}
        zoomControl={false}
      >
        <TileLayer
          attribution={this.props.map.openstreetmap.attribution}
          url={this.props.map.openstreetmap.url}
          />
        <ZoomControl
          />
      </LeafletMap>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.location.value }
}

export default connect(mapStateToProps)(Map);