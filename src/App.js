import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
//import { Marker, Popup, Circle, ImageOverlay } from 'react-leaflet'

import './css/leaflet.css'

//var L = require('leaflet');
const center = [-22.906138, -43.174528]

function Map() {
  return (
    <div id="map">
      <MapContainer 
        center={center} 
        zoom={8}
        minZoom={3}
        scrollWheelZoom={true}
        worldCopyJump={true}
        maxBounds={[[-180, 180], [180, -180]]}
        maxBoundsViscosity={0.99}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="openstreetmap" checked={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="mapbox satellite">
            <TileLayer
              attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
              url="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
