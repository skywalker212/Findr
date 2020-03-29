import React, { Component, Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import { Map as LeafletMap, TileLayer, Circle, Marker, LayersControl, FeatureGroup } from 'react-leaflet'
import './Map.css';
import { setNotification } from './../../store/reducers/notification/notificationSlice';
import icon from './components/icon/Icon';
import EditControl from './components/edit-control/EditControl';
import mapConfig from './../../../config/map.config';

class Map extends Component {
  mapRef = createRef();

  setCircleRef = (element) => {
    this.circleBounds = element.leafletElement.getBounds();
    this.mapRef.current.leafletElement.setMaxBounds(this.circleBounds);
  }
  
  _onEditPath = (edit) => {
    console.log(edit);
  }

  _onDeleted = (del) => {
    console.log(del);
  }

  _onCreate = (create) => {
    console.log(create);
    try {
      let geoJson = create.layer.toGeoJSON();
      console.log(geoJson);
      let bounds = create.layer.getBounds();
      let result = this.circleBounds.contains(bounds);
      if (!result) {
        create.layer.remove();
        this.props.sendNotification({
          message: "Draw your shape inside circle only!"
        })
      }
    } catch (err) {
      console.log(err);
    }
  }

  render () {
    return (
      <LeafletMap 
        center={this.props.location ? [this.props.location.lat, this.props.location.lng] : [mapConfig.lat, mapConfig.lng]} 
        zoom={mapConfig.zoom} 
        style={mapConfig.style}
        className={this.props.className}
        ref={this.mapRef}
        >
        {
          this.props.location ?
          (<Fragment>
            <Circle ref={this.setCircleRef} center={[this.props.location.lat, this.props.location.lng]} radius={3000}/>
            <Marker position={[this.props.location.lat, this.props.location.lng]} draggable={false} icon={icon} title="You are here" alt="mario"/>
          </Fragment>
          ) : false
        }
        <LayersControl position="topright">
          {
            mapConfig[mapConfig.use].map( tileProvider => {
              return (
                <LayersControl.BaseLayer name={tileProvider.name} checked={tileProvider.selected}>
                  <TileLayer
                    attribution={tileProvider.attribution}
                    url={tileProvider.url}
                  />
                </LayersControl.BaseLayer>
              );
            })
          }
          <LayersControl.Overlay name="My Area" checked>
            <FeatureGroup>
              <EditControl
                position='bottomright'
                onEdited={this._onEditPath}
                onCreated={this._onCreate}
                onDeleted={this._onDeleted}
                draw={{
                  rectangle: {
                    shapeOptions: {
                      stroke: true,
                      color: '#ee88ff',
                      weight: 4,
                      opacity: 0.5,
                      fill: true,
                      fillColor: null, //same as color by default
                      fillOpacity: 0.2,
                      showArea: true,
                      clickable: false
                    },
                    metric: false
                  },
                  circle: false,
                  polyline: false,
                  marker: false,
                  circlemarker: false,
                  polygon: {
                    showLength: true,
                    allowIntersection: false,
                    drawError: {
                        color: '#b00b00',
                        timeout: 1000
                    },
                    shapeOptions: {
                      stroke: true,
                      color: '#ee88ff',
                      weight: 4,
                      opacity: 0.5,
                      fill: true,
                      fillColor: null, //same as color by default
                      fillOpacity: 0.2,
                      showArea: true,
                      clickable: false
                    }
                  }
                }}
              />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </LeafletMap>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.location.value, user: state.user.value }
}

const mapDispatchToProps = dispatch => ({
  sendNotification: (notification) => dispatch(setNotification(notification))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);