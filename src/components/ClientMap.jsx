import { Box, Center, Spinner } from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLastLocation } from '../data/pinSlice';
import Map, { FullscreenControl, Marker } from 'react-map-gl';

const ClientMap = () => {
  const [viewState, setViewState] = useState();
  const [lastCoords, setLastCoords] = useState(null);
  const { lastSession, lastLocation } = useSelector((state) => state.pins);
  const mapRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (lastSession) {
      const pinIndex = lastSession.length - 1;
      // console.log(lastSession[pinIndex]);
      setLastCoords(lastSession[pinIndex]);
      dispatch(setLastLocation(lastSession[pinIndex]));
      if (lastLocation) {
        setLastCoords(
          lastLocation.isUserLocation[lastLocation.isUserLocation.length - 1]
        );
        // console.log('last location' + ' ' + lastCoords);
      }
    }
  }, [lastSession, lastLocation, lastCoords]);

  return (
    <>
      {lastCoords ? (
        <Map
          initialViewState={{
            longitude: lastCoords[0],
            latitude: lastCoords[1],
            zoom: 11,
          }}
          {...viewState}
          onMove={(event) => setViewState(event.viewState)}
          mapStyle='mapbox://styles/jmechristian/ck1ogvt4m1ses1brt5xfloncr'
          mapboxAccessToken='pk.eyJ1Ijoiam1lY2hyaXN0aWFuIiwiYSI6ImNsNW9udXBqNzBodDMzam92ZjR1cDNuM3oifQ.1XHdUAzgu6fisMcaHyPTnA'
          ref={mapRef}
        >
          <FullscreenControl />
          {lastCoords && (
            <Marker latitude={lastCoords[1]} longitude={lastCoords[0]}>
              <Box width='30px' height={'30px'}>
                <img src='https://firebasestorage.googleapis.com/v0/b/maine-fe60f.appspot.com/o/Car.svg?alt=media&token=cc33097c-2fb7-424f-ad5a-25acecb7d459' />
              </Box>
            </Marker>
          )}
        </Map>
      ) : (
        <Center height={'100%'}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='brand.900'
            size='xl'
          />
        </Center>
      )}
    </>
  );
};

export default ClientMap;
