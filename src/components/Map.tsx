import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from '@emotion/styled';
import { Park, parks } from '../data/parks';

// Get your access token from https://account.mapbox.com/
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || 'YOUR_MAPBOX_TOKEN';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Sidebar = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-height: calc(100% - 40px);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    max-height: 200px;
    top: auto;
    bottom: 20px;
    right: 20px;
  }
`;

const ParkItem = styled.div`
  cursor: pointer;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #f0f0f0;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.5636, 6.2442], // Medellín center
      zoom: 12
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Add markers for parks
    parks.forEach(park => {
      const marker = new mapboxgl.Marker({ color: '#4CAF50' })
        .setLngLat(park.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <h3>${park.name}</h3>
          <p>${park.description}</p>
        `))
        .addTo(map.current!);

      // Add markers for attractions
      park.attractions.forEach(attraction => {
        const attractionMarker = new mapboxgl.Marker({ color: '#2196F3' })
          .setLngLat(attraction.coordinates)
          .setPopup(new mapboxgl.Popup().setHTML(`
            <h3>${attraction.name}</h3>
            <p>${attraction.description}</p>
            <p>Type: ${attraction.type}</p>
          `))
          .addTo(map.current!);
      });
    });
  }, []);

  const handleParkClick = (park: Park) => {
    setSelectedPark(park);
    map.current?.flyTo({
      center: park.coordinates,
      zoom: 15,
      essential: true
    });
  };

  return (
    <MapContainer>
      <Sidebar>
        <h2>Medellín Parks</h2>
        {parks.map(park => (
          <ParkItem key={park.id} onClick={() => handleParkClick(park)}>
            <h3>{park.name}</h3>
            <p>{park.description}</p>
          </ParkItem>
        ))}
      </Sidebar>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </MapContainer>
  );
}; 