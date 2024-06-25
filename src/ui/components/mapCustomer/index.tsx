// /src/ui/components/mapCustomer/index.tsx
"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import "./mapCustomer.scss";

import { ISpots, ISpot } from "@/lib/dataBase/models/types";

export default function MapCustomer({ spots }: { spots: ISpots | null }) {
  
  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (spots !== null) {
      setCenter(centerMapContainer(spots));
    }
  }, [spots]);

  if (!isClient || spots === null) {
    return null;
  }

  return (
    <MapContainer center={center} zoom={10} className="map-customer">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {spots.map((spot: ISpot) => (
        <Marker
          key={spot._id}
          position={convertGpsCoordinates(spot.gpsCoordinates)}
          icon={markerEscalade}
        >
          <Tooltip>
            <div className="map-customer_tooltip">
              <h3>{spot.name}</h3>
              <p>{spot.description}</p>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}

const markerEscalade = new Icon({
  iconUrl: "/icon/logo-escalade_markerEscalade.svg",
  iconSize: [100, 100],
  iconAnchor: [50, 90],
});

function convertGpsCoordinates(gpsCoordinates: string): [number, number] {
  const gps = gpsCoordinates.split(",");
  return [parseFloat(gps[0]), parseFloat(gps[1])];
}

const centerMapContainer = (spots: ISpots): [number, number] => {
  if (spots === null || spots.length === 0) return [0, 0];

  const totalCoordinates = spots.reduce(
    (acc, spot) => {
      const [lat, lng] = convertGpsCoordinates(spot.gpsCoordinates);
      acc.lat += lat;
      acc.lng += lng;
      return acc;
    },
    { lat: 0, lng: 0 }
  );

  const centerLat = totalCoordinates.lat / spots.length;
  const centerLng = totalCoordinates.lng / spots.length;

  return [centerLat, centerLng];
};
