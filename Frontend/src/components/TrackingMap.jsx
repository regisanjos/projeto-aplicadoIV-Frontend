import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const TrackingMap = ({ location }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  if (!location || !location.lat || !location.lng) {
    return <div>Coordenadas inválidas.</div>;
  }

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  try {
    return (
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  } catch (error) {
    console.error('Erro ao carregar o mapa:', error);
    return <div>Erro ao carregar o mapa.</div>;
  }
};

export default TrackingMap;