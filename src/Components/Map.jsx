// src/Map.js
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 37.7749,
        lng: -122.4194,
      }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(MapContainer);
