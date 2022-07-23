import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setLastLocation, setLastSession } from './data/pinSlice';
import ClientMap from './components/ClientMap';
import 'mapbox-gl/dist/mapbox-gl.css';
import { database } from './firebase';
import { ref as dataRef, onValue, child, get } from 'firebase/database';

function App() {
  // const [lastSession, setLastSession] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getInitData();
  }, []);

  const getLastLocation = () => {
    const dbRef = dataRef(database, 'sessions');
    onValue(dbRef, (snapshot) => {
      const data = Object.values(snapshot.val());
      console.log(data[data.length - 1]);
      return data;
    });
  };

  const getInitData = async () => {
    setIsLoading(true);
    const dbRef = dataRef(database);
    const loc = await get(child(dbRef, 'sessions')).then((snapshot) => {
      const data = Object.values(snapshot.val());
      return data;
    });
    dispatch(setLastSession(loc));
    setIsLoading(false);
  };

  return (
    <Box
      bgColor={'brand.800'}
      py={{ base: '12', lg: '16' }}
      height={{ lg: '100%' }}
    >
      <Flex width={'100%'} height='100%' alignItems={'center'}>
        <Grid
          gridAutoRows={'max-content'}
          gridTemplateColumns={{ lg: '7fr 5fr' }}
          gap={{ base: '10', md: '12' }}
          width={'80%'}
          maxWidth='1160px'
          mx='auto'
        >
          <GridItem textAlign={'center'}>
            <Text
              color={'white'}
              fontFamily='brand'
              fontWeight={'extrabold'}
              fontSize={{
                base: '64px',
                lg: '90px',
                xl: '110px',
              }}
              lineHeight={'1'}
            >
              Whale Be In{' '}
              <span style={{ fontStyle: 'italic', color: '#D90D32' }}>
                Maine!
              </span>
            </Text>
            <Text
              color={'brand.700'}
              fontSize={{
                base: '16px',
                md: '20px',
                lg: '20px',
                xl: '26px',
              }}
              mt={{ base: '2' }}
            >
              (Not my best pun, but you get it.)
            </Text>
          </GridItem>
          <GridItem rowSpan={{ base: 1, lg: 2 }}>
            <Box
              bgColor='gray.400'
              height={{ base: '500px', lg: '84vh' }}
              position='relative'
              boxShadow={'dark-lg'}
            >
              {loading ? (
                <Center height={'100%'}>
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='brand.900'
                    size='xl'
                  />
                </Center>
              ) : (
                //
                <ClientMap />
              )}

              <Box
                bgColor={'brand.900'}
                width='fit-content'
                position={'absolute'}
                top={{ base: '10px' }}
                left={{ base: '10px' }}
              >
                <Text
                  color='white'
                  fontWeight={'bold'}
                  px='3'
                  py='1'
                  fontSize={{ xl: '18px' }}
                >
                  LIVE &bull;
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem alignSelf='end'>
            <Box>
              <Grid gridAutoColumns={'1fr 1fr'} gap='4'>
                <GridItem
                  color={'white'}
                  width='100%'
                  colSpan={2}
                  textAlign='center'
                  mb={{ base: '2' }}
                >
                  <Text
                    fontFamily={'brand'}
                    fontWeight='bold'
                    fontSize={{ base: '30px', md: '32px' }}
                    borderTop='1px'
                    borderBottom={'1px'}
                    py='2'
                  >
                    Latest{' '}
                    <span style={{ fontStyle: 'italic', color: '#D90D32' }}>
                      Posts
                    </span>
                  </Text>
                </GridItem>
                <GridItem
                  colSpan={{ base: 2, md: 1 }}
                  width={{ base: '100%' }}
                  height={{
                    base: '300px',
                    lg: '175px',
                    xl: '250px',
                  }}
                  backgroundColor={'gray.400'}
                ></GridItem>
                <GridItem
                  colSpan={{ base: 2, md: 1 }}
                  width={{ base: '100%' }}
                  height={{
                    base: '300px',
                    lg: '175px',
                    xl: '250px',
                  }}
                  backgroundColor={'gray.400'}
                ></GridItem>
                <GridItem colSpan={{ base: 2 }}>
                  <Box width={'100%'} textAlign='center' mt={{ base: '1' }}>
                    <Text
                      color='brand.700'
                      fontWeight={'bold'}
                      textTransform='uppercase'
                      letterSpacing='widest'
                      fontSize={{ '2xl': '18px' }}
                    >
                      See All Posts &rarr;
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}

export default App;
