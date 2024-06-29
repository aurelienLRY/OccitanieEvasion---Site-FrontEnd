"use client";

/*
 * src/ui/components/mapCustomer/index.tsx
 * Component to display a map with markers for each spot
 * code: @aurelienLRY
 */


/* librairie react */
import { useEffect } from "react";
import Link from 'next/link';
/* librairie leaflet */
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngBounds } from "leaflet";
/* Styles */
import "./mapCustomer.scss";
/* Types */
import { ISpots, ISpot } from "@/lib/dataBase/models/types";


/**
 * Component to display a map with markers for each spot.
 * @param spots - The spots to be displayed on the map.
 */
function MapCustomer({ spots }: { spots: ISpots | null }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('window is defined');
    }
    // Retourner undefined au lieu de null
    return undefined;
  }, []);

  const SetViewComponent = ({ spots }: { spots: ISpots }) => {
    const map = useMap();
    useEffect(() => {
      if (spots && spots.length > 0) {
        const bounds = getBounds(spots);
        map.fitBounds(bounds);
      }
    }, [spots, map]);
    return null;
  };


if (spots === null) return null;
  return (
    <MapContainer center={[0, 0]} zoom={10} className="map-customer" >
      <SetViewComponent spots={spots} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {spots.map((spot: ISpot) => (
        <Marker
          key={spot._id}
          position={convertGpsCoordinates(spot.gpsCoordinates)}
          icon={markerIcon(spot)}
        >
          <Popup className="map-customer_tooltip" interactive>
            {spot.photo && (
              <div className="tooltip-header">
                <picture>
                  <img
                    src="https://lh6.googleusercontent.com/proxy/scuEZItMQMnmLK5vK_E7fsIeiSKgMPNgED0LplL9cFExUzDDfa0rL3ph2qQTMC1ECeH0yPgz2pKZw5doVEJKSsocysKoVjfp27FvJPjgjwz6p31MSLo0fiDR31rTeEEUyhaC-Q"
                    alt="spot"
                  />
                </picture>
              </div>
            )}
            <div className="tooltip-body">
              <h3 className="title">{spot.name}</h3>
              {spot.description && (
                <div className="content">{spot.description}</div>
              )}
            </div>
            <div className="tooltip-footer">
              <Link href="#" className="btn-secondary-outline small">En savoir plus</Link>
              <Link href="#" className="btn-outline small">Réserver</Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

/**
 * Converts GPS coordinates from a string format to an array format.
 * @param gpsCoordinates - The GPS coordinates in string format (e.g., "latitude,longitude").
 * @returns The GPS coordinates in array format [latitude, longitude].
 */
function convertGpsCoordinates(gpsCoordinates: string): [number, number] {
  const gps = gpsCoordinates.split(",");
  return [parseFloat(gps[0]), parseFloat(gps[1])];
}

/**
 * Calculates the bounds of the map based on the spots' GPS coordinates.
 * @param spots - The spots to calculate the bounds from.
 * @returns The bounds of the map.
 */
const getBounds = (spots: ISpots): LatLngBounds => {
  const coordinates = spots.map(spot => convertGpsCoordinates(spot.gpsCoordinates));
  return new LatLngBounds(coordinates);
};

// Export the component using `dynamic` to disable server-side rendering
export default MapCustomer;

/**
 * Determines the marker icon based on the spot's practiced activities.
 * @param spot - The spot to determine the marker icon for.
 * @returns The marker icon for the spot.
 */
const markerIcon = (spot: ISpot) => {
  const { practicedActivities } = spot;
  // handle if the array has multiple activities
  if (practicedActivities.length > 1) {
    return markerEscalade;
  }
  // otherwise, get the activity
  const activity = practicedActivities[0].activityName.toLocaleLowerCase();

  switch (activity) {
    case "escalade":
      return markerEscalade;
    case "randonée aquatique":
    case "canyoning":
    case "canyoning sportif":
      return markerCanyoning;
    case "spéléologie découverte":
    case "spéléologie sportive":
      return markerSpeleo;
    case "via corda":
      return markerViaCorda;

    default:
      return markerEscalade;
  }
};

/* Custom marker icons */
const markerEscalade = new Icon({
  iconUrl: "/icon/_markerEscalade.svg",
  iconSize: [100, 100],
  iconAnchor: [50, 90],
});

const markerCanyoning = new Icon({
  iconUrl: "/icon/_markerCanyning.svg",
  iconSize: [100, 100],
  iconAnchor: [50, 90],
});

const markerSpeleo = new Icon({
  iconUrl: "/icon/_markerSpeleo.svg",
  iconSize: [100, 100],
  iconAnchor: [50, 90],
});

const markerViaCorda = new Icon({
  iconUrl: "/icon/_markerViaCorda.svg",
  iconSize: [100, 100],
  iconAnchor: [50, 90],
});
