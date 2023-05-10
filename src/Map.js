
import React, { useEffect, useRef, useState } from "react";
import {
    MapContainer,
    TileLayer,
    LayersControl,
    useMapEvents,
    useMap,
    Popup,
} from "react-leaflet";
import L from "leaflet";

import 'primeicons/primeicons.css';

import './css/leaflet.css';
import './css/leafletRouting.css';
import './css/site.css';

import RoutingMachine from './RoutingControl';


const Map = () => {
    const routingMachineRef = useRef();

    // Center
    const center = [-22.906138, -43.174528];

    // Bounds
    const worldBound = [[-180, 180], [180, -180]];
    // eslint-disable-next-line
    const southAmericaBound = [[-60, 30], [20, -140]];

    function CreateMarker() {
        const [position, setPosition] = useState(null);
        const map = useMap();

        useMapEvents({
            click(e) {
                setPosition(e.latlng);
            },
        });

        return position === null ? null : (
            <Popup position={position}>
                <div className="marker">
                    <button className="marker-btn" onClick={() => [
                        routingMachineRef.current.spliceWaypoints(0, 1, position),
                        map.closePopup()

                    ]}>Comece a partir deste local</button>
                    <button className="marker-btn" onClick={() => [
                        routingMachineRef.current.spliceWaypoints(routingMachineRef.current.getWaypoints().length - 1, 1, position),
                        map.closePopup()

                    ]}>Ir para este local</button>
                </div>
            </Popup>
        )
    }

    function FindLocation() {
        const map = useMap();
        const container = L.DomUtil.create("button", "locate-btn");

        container.addEventListener("click", () => {
            map.locate().on("locationfound", function (e) {
                map.flyTo(e.latlng, 14);
            })
        });

        L.DomEvent.disableClickPropagation(container);

        useEffect(() => {
            if (map.getContainer().querySelector(".locate-btn") === null) {
                try {
                    map.getContainer().querySelector(".leaflet-routing-geocoders").appendChild(container)

                } catch (err) {
                    console.log('Error:', err)
                }
            }
        });

        return null;
    }

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
            >
                {/* *************** */}

                <RoutingMachine ref={routingMachineRef} />

                {/* *************** */}
                <LayersControl position="topleft">
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
                {/* *************** */}

                <CreateMarker />
                <FindLocation />

                {/* *************** */}
            </MapContainer>
        </>
    );
};

export default Map;
