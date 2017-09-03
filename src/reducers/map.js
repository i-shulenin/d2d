import ol from 'openlayers';
import { SET_VIEW } from '../constants/Map';

const initialState = {
  view: {
    center: [37.61778, 55.75583],
    zoom: 14,
  },
  controls: [
    new ol.control.ScaleLine(),
  ]
}

export default function map(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW:

      return {
        ...state,
        view: action.payload
      }
    default:

      return state;
  }
}
