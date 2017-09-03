import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ol from 'openlayers';
import { getProps } from '../../utils';
import 'openlayers/css/ol.css';

class Map extends Component {

  map = null;
  mapContainer = null;

  constructor(props) {
    super(props);

    console.log('%c*** Map - constructor ***', 'background: #0000FF; color: #FFFFFF; font-weight: bold;');
    console.log(props);
  }

  componentDidMount() {
    const view = new ol.View(this.props.view);
    const layers = [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      })
    ];
    this.map = new ol.Map({
      layers,
      view
    });
    this.map.setTarget(this.mapContainer);
  }

  render() {
    return (
      <div className="map" ref={(element) => this.mapContainer = element}>
      </div>
    );
  }
}

export default Map;

Map.propTypes = {
  view: PropTypes.object.isRequired,
}
