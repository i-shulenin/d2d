import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ol from 'openlayers';
import 'openlayers/css/ol.css';

class Map extends Component {
  constructor(props) {
    super(props);

    console.log('%c*** Map - constructor ***', 'background: #0000FF; color: #FFFFFF; font-weight: bold;');
    console.log(props);
  }

  render() {
    return (
      <div>Map</div>
    );
  }
}

export default Map;

Map.propTypes = {
  view: PropTypes.object.isRequired,
}
