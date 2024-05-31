import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapCustomer.scss";
import {Icon} from "leaflet";

import { MarkerEscalade } from "@/ui/svg";

/* exemple de props attendu */
/*
{
  "_id": "66420191191d2f9f5c027d1c",
  "name": "Gorges du banquet (Tarn)",
  "description": "",
  "gpsCoordinates": "43.51255482178179, 2.473309067273864",
  "practicedActivities": [
      {
          "activityName": "Randonée Aquatique",
          "activityId": "6641ffca191d2f9f5c027423",
          "_id": "66420191191d2f9f5c027d1d"
      }
  ],
  "half_day": true,
  "full_day": true,
  "max_OfPeople": 10,
  "min_OfPeople": 2,
  "meetingPoint": "neant",
  "estimatedDuration": "3h30",
  "__v": 0
}*/

export default function MapCustomer({ spots } ) {
    // Centrer la carte sur la moyenne des spots  
    const moyennePosition = spots.reduce((acc, spot) => {
        const gps = spot.gpsCoordinates.split(",");
        return [acc[0] + parseFloat(gps[0]) / spots.length, acc[1] + parseFloat(gps[1]) / spots.length];
    }, [0, 0]);

  return (
    <MapContainer
      center={moyennePosition as [number, number]}
      zoom={10}
      className="map-customer"
    >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {
            spots.map((position, index) => {
                return (
                    <Marker key={index} position={convertGpsCoordinates(position.gpsCoordinates)} icon={markerEscalade}>
                  <Tooltip >
                    <div className="map-customer_tooltip">
                    <h3>{position.name}</h3>
                    <p>{position.description}</p>
                    </div>
                  </Tooltip>
                    </Marker>
                );
            })  

        }
    
    </MapContainer>
  );
}


const markerEscalade = new Icon({
  iconUrl: "/icon/logo-escalade_markerEscalade.svg",
  iconSize: [100,100],
  iconAnchor: [50, 90],
});

//  function qui convertie "gpsCoordinates": "43.51255482178179, 2.473309067273864",  en [number, number]
  function convertGpsCoordinates(gpsCoordinates: string) {
    const gps = gpsCoordinates.split(",");
     return [parseFloat(gps[0]), parseFloat(gps[1])];
  }