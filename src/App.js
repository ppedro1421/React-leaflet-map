import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
// eslint-disable-next-line
import { Marker, Popup, Circle, Rectangle } from 'react-leaflet'

import './css/leaflet.css'

//var L = require('leaflet');
const center = [-22.906138, -43.174528]

// Bounds
const worldBound = [[-180, 180], [180, -180]]
const southAmericaBound = [[-60, 30], [20, -140]]

function Map() {
  return (
    <div id="map">
      <MapContainer
        center={center}
        zoom={8}
        zoomSnap={0.5}
        zoomDelta={0.5}
        minZoom={3}
        maxZoom={18}
        scrollWheelZoom={true}
        worldCopyJump={true}
        maxBounds={worldBound}
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
          <LayersControl.Overlay name='South America Bound'>
            <Rectangle bounds={southAmericaBound} name='South America Bound'>
              <Popup>South America Bound</Popup>
            </Rectangle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='World Bound'>
            <Rectangle bounds={worldBound} name='World Bound'>
              <Popup>World Bound</Popup>
            </Rectangle>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
