import React from 'react';
import { Path } from 'react-leaflet';

export default class Drawer extends Path {
  render (props) {
    console.log(props);
    return (
      <p>Hello world</p>
    )
  }
}