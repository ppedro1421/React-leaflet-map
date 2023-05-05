
import React, { useState} from "react";
import {
    TileLayer,
    MapContainer,
    LayersControl
} from "react-leaflet";

import RoutingControl from './RoutingControl'

const Map = () => {
    const [map, setMap] = useState(null);

    // Center
    const center = [-22.906138, -43.174528]

    // Bounds
    const worldBound = [[-180, 180], [180, -180]]
    const southAmericaBound = [[-60, 30], [20, -140]]

    return (
        <>
            <MapContainer
                center={center}
                zoom={8}
                zoomSnap={0.5}
                zoomDelta={0.5}
                minZoom={3}
                maxZoom={18}
                zoomControl={false}
                worldCopyJump={true}
                maxBounds={worldBound}
                maxBoundsViscosity={0.99}
                style={{ height: "100vh", width: "100%", padding: 0 }}
                // Set the map instance to state when ready:
                whenCreated={map => setMap(map)}
            >
                {/* *************** */}
                {/* Pass in our custom control layer here, inside of the map container */}
                {/* *************** */}
                <RoutingControl />
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
        </>
    );
};

export default Map;
