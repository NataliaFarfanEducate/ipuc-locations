import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Church } from '../types';

interface MapProps {
  churches: Church[];
}

const Map: React.FC<MapProps> = ({ churches }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {churches.map(church => (
        <Marker key={church.id} position={[church.location.lat, church.location.lng]}>
          <Popup>
            <h2>{church.name}</h2>
            <p>{church.description}</p>
            <p>{church.location.address}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;