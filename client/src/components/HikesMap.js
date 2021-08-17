import React from 'react';
import HikeMarkers from './HikeMarkers';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet'; // for a custom icon

const HikesMap = ({hikes}) => {

  // for custom hike icon:
  const icon = new Icon({
    iconUrl: "the url of the icon",
    iconSize: [25, 25]
  });

  return (
    <MapContainer
      center={[56.621755, -4.138820]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HikeMarkers hikes={hikes}/>

    </MapContainer>
  );
}

export default HikesMap;