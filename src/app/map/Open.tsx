
"use client"

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LatLngTuple } from 'leaflet';


// Define marker icon
const markerIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const MapComponent: React.FC = () => {
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);
  const [destination, setDestination] = useState<LatLngTuple | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [avgTime, setAvgTime] = useState<number | null>(null);

  useEffect(() => {
    // Fetch user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    if (value === '') {
      setDestination(null);
      setDistance(null);
      setAvgTime(null);
    } else {
      const [lat, lng] = value.split(',').map((str) => parseFloat(str.trim()));
      if (!isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        setDestination([lat, lng]);
        if (userLocation) {
          const dist = calculateDistance(userLocation[0], userLocation[1], lat, lng);
          setDistance(dist);
          const avgTimeInHours = dist / 50;
          setAvgTime(avgTimeInHours * 60);
        }
      } else {
        setDestination(null);
        setDistance(null);
        setAvgTime(null);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow">
        <MapContainer center={[0, 0]} zoom={2} className="h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {userLocation && <Marker position={userLocation} icon={markerIcon} />}
          {destination && <Marker position={destination} icon={markerIcon}>
            <Popup>{`Destination: ${destination[0]}, ${destination[1]}`}</Popup>
          </Marker>}
        </MapContainer>
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Enter destination (latitude, longitude)"
          className="w-full border rounded-md p-2 mb-2"
          onChange={handleDestinationChange}
        />
        {distance && (
          <div>
            <p>Distance to destination: {distance.toFixed(2)} km</p>
            <p>Average time: {avgTime ? `${avgTime.toFixed(2)} minutes` : 'N/A'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
