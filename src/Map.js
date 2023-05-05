
import React, { useState } from "react";
import {
    TileLayer,
    MapContainer,
    LayersControl,
    Marker,
    Circle,
    Popup,
    LayerGroup,
    useMapEvents,
} from "react-leaflet";

import { 
    LeafletElement,
} from "@react-leaflet/core";

import RoutingControl from './RoutingControl';

// function LocationMarker() {
//     const [position, setPosition] = useState(null)
//     const map = useMapEvents({
//         click() {
//             map.locate()
//             console.log('Click')
//         },
//         locationfound(e) {
//             setPosition(e.latlng)
//             console.log(e.latlng)
//             map.flyTo(e.latlng, map.getZoom())
//             console.log(position)
//         },
//     })

//     return position === null ? null : (
//         <Marker position={position}>
//             <Popup> {position.lat} {position.lng} </Popup>
//         </Marker>
//     )
// }

function CreateMarker() {
    const [position, setPosition] = useState(null)
  
    const map = useMapEvents({
        click(e) {
            console.log(e.latlng)
            setPosition(e.latlng)
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                <div>
                    <button onClick={(e) => console.log(1)}>Start from this location</button>
                    <button onClick={(e) => console.log(2)}>Go to this location</button>
                </div>
            </Popup>
        </Marker>
    )
}

const Map = () => {
    // eslint-disable-next-line
    const [map, setMap] = useState(null);

    // Center
    const center = [-22.906138, -43.174528]

    // Bounds
    const worldBound = [[-180, 180], [180, -180]]
    const southAmericaBound = [[-60, 30], [20, -140]]

    // Marcos
    const RJ = [-22.906138, -43.174528]
    const SP = [-23.535141, -46.623467]

    return (
        <>
            <MapContainer
                center={center}
                zoom={8}
                zoomSnap={0.5}
                zoomDelta={0.5}
                minZoom={3}
                maxZoom={18}
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

                {/* <LocationMarker /> */}
                <CreateMarker />

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
                    <LayersControl.Overlay name="Marcos">
                        <LayerGroup>
                            <Circle center={RJ} radius={50000}>
                                <Popup>
                                    RJ
                                </Popup>
                            </Circle>
                            <Circle center={SP} radius={50000}>
                                <Popup>
                                    RJ
                                </Popup>
                            </Circle>
                        </LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>
        </>
    );
};

export default Map;
