import React { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from '../components/Map';
import './App.css';

class App extends Component {
  render() {
    const { map } = this.props

    return (
      <Map view={map.view} />
    );
  }
}

function mapStateToProps(state) {
  return {
    map: state.map,
  }
}

export default connect(mapStateToProps)(App);
