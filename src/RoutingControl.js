import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    position: 'topright',
    waypoints: [
      L.latLng(-22.906138, -43.174528),
      L.latLng(-23.535141, -46.623467)
    ],
    lineOptions: {
      styles: [
        {
          color: '#757de8',
        },
      ],
    },
  });

  return instance;
};

// Pass our createRoutingMachineLayer to the createControlHook:
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// Export
export default RoutingMachine;