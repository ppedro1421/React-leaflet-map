import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";

import {
    createControlComponent,
} from "@react-leaflet/core";

// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const RoutingControl = (props) => {
    const waypoints = [
        // L.latLng(-22.906138, -43.174528),
        // L.latLng(-23.535141, -46.623467)
    ];

    const instance = L.Routing.control({
        position: 'topright',
        waypoints: waypoints,
        lineOptions: {
            styles: [
                { color: 'white', opacity: 0.5, weight: 8 },
                { color: '#757de8' }
            ],
        },
        altLineOptions: {
            styles: [
                { color: 'white', opacity: 0.5, weight: 8 },
                // { color: '#757de8', opacity: 0.5},
                { color: 'black', opacity: 0.5, weight: 2, dashArray: '4' },
            ]
        },
        showAlternatives: true,
        routeWhileDragging: true,
        plan: L.Routing.plan(waypoints, {
            reverseWaypoints: true,
            geocoder: L.Control.Geocoder.nominatim(),
        }),
        language: 'pt-BR',
        // Backend
        serviceUrl: 'http://10.21.1.69:5000/route/v1',
    });

    return instance;
};

// Pass our createRoutingMachineLayer to the createControlHook:
const RoutingMachine = createControlComponent(RoutingControl);

// Export
export default RoutingMachine;