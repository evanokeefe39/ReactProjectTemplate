import React from 'react'

import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
//import { Grid } from '@material-ui/core';


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZW8zOSIsImEiOiJja2p3eTYxODMwOGlwMnlveDluOGU0NXV1In0.L5NDVcbYby-RuOV9byZgHg';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];
export default function CustomMap() {
    

  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];
//64px is min-height in material ui css
  return (
    <div className="map-container" style={{position: 'absolute', height: 'calc(100vh - 64px)', width: '100%'}}>
    
    <DeckGL 
       
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers} >
      
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      
      
    </DeckGL>
      </div>
  );
}