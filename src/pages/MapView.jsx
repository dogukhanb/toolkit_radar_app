import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { icon } from "leaflet";

const MapView = () => {
  const { flights } = useSelector((store) => store.flight);

  // Create custom icon
  const planeIcon = L.icon({
    iconUrl: "plane-icon.png",
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={[38.891818, 34.435076]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => (
        <Marker
          icon={planeIcon}
          position={[flight.lat, flight.lng]}
          key={flight.id}
        >
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Kod: {flight.code}</span>
              <button
                onClick={() => console.log("Detay:", flight.id)}
                className="w-100"
              >
                Detay
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      {/*  <Marker> </Marker> */}
    </MapContainer>
  );
};

export default MapView;
