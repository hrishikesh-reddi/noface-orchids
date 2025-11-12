"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icons in react-leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  { name: "Connaught Place, Delhi", position: [28.6315, 77.2167] as [number, number], score: 82, color: "#22c55e" },
  { name: "Koramangala, Bengaluru", position: [12.9352, 77.6245] as [number, number], score: 88, color: "#22c55e" },
  { name: "Bandra West, Mumbai", position: [19.0596, 72.8295] as [number, number], score: 75, color: "#eab308" },
  { name: "Hitech City, Hyderabad", position: [17.4485, 78.3908] as [number, number], score: 65, color: "#f97316" },
];

export default function MapComponent() {
  useEffect(() => {
    // Fix for Leaflet icon paths
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "600px", width: "100%", borderRadius: "0.5rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <div key={index}>
          <Marker position={location.position} icon={icon}>
            <Popup>
              <div className="text-sm">
                <strong>{location.name}</strong>
                <br />
                Safety Score: <strong>{location.score}</strong>
              </div>
            </Popup>
          </Marker>
          <Circle
            center={location.position}
            radius={50000}
            pathOptions={{
              color: location.color,
              fillColor: location.color,
              fillOpacity: 0.2,
            }}
          />
        </div>
      ))}
    </MapContainer>
  );
}
