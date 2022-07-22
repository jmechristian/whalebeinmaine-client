import { Box } from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import Map, { FullscreenControl, Marker } from 'react-map-gl';
import car from '/images/Car.svg';

const ClientMap = ({ location }) => {
  const [viewState, setViewState] = useState();
  const [lastLocation, setLastLocation] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    console.log(location ? location.isUserLocation : 'Loading');
    setLastLocation(location ? location.isUserLocation : []);
    console.log(
      lastLocation ? lastLocation[lastLocation.length - 1][0] : 'none'
    );
    if (lastLocation) {
      setViewState({
        longitude: lastLocation[lastLocation.length - 1][0],
        latitude: lastLocation[lastLocation.length - 1][1],
        zoom: 13,
      });
    }
  }, [location]);

  return (
    <Map
      initialViewState={
        lastLocation
          ? {
              longitude: lastLocation[lastLocation.length - 1][0],
              latitude: lastLocation[lastLocation.length - 1][1],
              zoom: 13,
            }
          : {
              longitude: -77.438267,
              latitude: 39.0431092,
              zoom: 13,
            }
      }
      {...viewState}
      onMove={(event) => setViewState(event.viewState)}
      mapStyle='mapbox://styles/jmechristian/ck1ogvt4m1ses1brt5xfloncr'
      mapboxAccessToken='pk.eyJ1Ijoiam1lY2hyaXN0aWFuIiwiYSI6ImNsNW9udXBqNzBodDMzam92ZjR1cDNuM3oifQ.1XHdUAzgu6fisMcaHyPTnA'
      ref={mapRef}
    >
      <FullscreenControl />
      {lastLocation && (
        <Marker
          latitude={lastLocation[lastLocation.length - 1][1]}
          longitude={lastLocation[lastLocation.length - 1][0]}
        >
          <Box width='30px' height={'30px'}>
            <img src='/images/car.svg' />
          </Box>
        </Marker>
      )}
    </Map>
  );
};

export default ClientMap;
