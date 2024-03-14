import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker, Polyline, Polygon, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import "./mapa.css";

export const MapView = () => {
  let iconUbicacion = new L.Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [38, 95], // size of the overall icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marking the location on map
    shadowAnchor: [4, 62], // the cooridnates of the point which will correspond to the base of shadown
    popupAnchor: [-3, -76],
  });

const position = [51.505, -0.09]
const position1 = [9.432057668636016, -64.47554449926618]
// L.Marker.prototype.options.icon

const center = [51.505, -0.09]

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
]

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: 'black' }
const limeOptions = { color: 'lime' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }


  return (
    <>


  <MapContainer className="mapa" center={center} zoom={13} scrollWheelZoom={false} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
    />
    <Marker position={center}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Circle center={center} pathOptions={fillBlueOptions} radius={200}   />
    <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}  >
      <Popup >Popup in CircleMarker</Popup>
    </CircleMarker>
    <Polyline pathOptions={limeOptions} positions={polyline}  />
    <Polyline pathOptions={limeOptions} positions={multiPolyline}  />
    <Polygon pathOptions={purpleOptions} positions={polygon} />
    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
    <Rectangle bounds={rectangle} pathOptions={blackOptions} />
  </MapContainer>,

<MapContainer className="mapa" center={position1} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position1}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,

{/* <MapContainer className="mapa" center={[9.432057668636016, -64.47554449926618]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[9.432057668636016, -64.47554449926618]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> */}
      

    



    </>
  );
};
