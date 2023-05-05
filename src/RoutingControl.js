import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";


const createRoutineMachineLayer = () => {
    const instance = L.Routing.control({
        position: 'topright',
        waypoints: [
            L.latLng(-22.906138, -43.174528),
            L.latLng(-23.535141, -46.623467)
        ],
        lineOptions: {
            styles: [
                { color: 'white', opacity: 0.5, weight: 8 },
                { color: '#757de8' }
            ],
        },
        altLineOptions: {
            styles: [
                { color: 'white', opacity: 0.5, weight: 8 },
                { color: '#757de8', opacity: 0.5},
                { color: 'black', opacity: 0.5, weight: 2, dashArray: '2,4' },
            ]
        },
        showAlternatives: true,
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        language: 'pt-BR',
        // Backend
        // serviceUrl: 'Your Backend',
    });

    return instance;
};

// Pass our createRoutingMachineLayer to the createControlHook:
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// Export
export default RoutingMachine;
