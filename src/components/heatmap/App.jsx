import React from 'react';
import {
  MapContainer,
  TileLayer,
  Polygon
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from './data';

const center = [11.559416608947485, 78.82809495606136];

export default function HeatMap() {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: '100vw', height: '100vh', background: 'white' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/?key=2gH4gjN4wAanGNOLFAM2#0.3/10.48932/-13.34063"
      />
      {
        statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

          return (<Polygon
            pathOptions={{
              fillColor: '#FD8D3C',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: 'white'
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  dashArray: "",
                  fillColor: "#BD0026",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: "white",
                })
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: "3",
                  color: 'white',
                  fillColor: '#FD8D3C'
                });
              },
              click: (e) => {

              }
            }}
          />)
        })
      }
    </MapContainer>
  );
}
