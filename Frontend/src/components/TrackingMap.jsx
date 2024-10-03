import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

/**
 * Mapa de rastreamento da localização.
 *
 * @param {object} location - Objeto com as coordenadas da localização (lat e lng).
 */
const TrackingMap = ({ location }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  }; 

  const center = {
    lat: location.lat, 
    lng: location.lng, 
  }; 

  try {
    return (
      <LoadScript googleMapsApiKey="SUA_API_KEY_DO_GOOGLE_MAPS">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center} 
        >
          <Marker position={center} /> {/* Exibe um marcador na localização atual. */}
        </GoogleMap>
      </LoadScript>
    );
  } catch (error) {
    console.error('Erro ao carregar o mapa:', error);
    return <div>Erro ao carregar o mapa.</div>;
  }
};

export default TrackingMap;