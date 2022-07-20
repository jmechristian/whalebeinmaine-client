import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  VStack,
  AspectRatio,
} from '@chakra-ui/react';

function App() {
  return (
    <Box
      bgColor={'brand.800'}
      py={{ base: '14', lg: '16' }}
      height={{ lg: '100%' }}
    >
      <Flex width={'100%'} height='100%' alignItems={'center'}>
        <Grid
          gridAutoRows={'max-content'}
          gridTemplateColumns={{ lg: '1fr 1fr' }}
          gap={{ base: '12' }}
          width={'80%'}
          mx='auto'
        >
          <GridItem textAlign={'center'}>
            <Text
              color={'white'}
              fontFamily='brand'
              fontWeight={'extrabold'}
              fontSize={{ base: '62px' }}
              lineHeight={'1'}
            >
              Whale Be In{' '}
              <span style={{ fontStyle: 'italic', color: '#D90D32' }}>
                Maine!
              </span>
            </Text>
            <Text
              color={'brand.700'}
              fontSize={{ base: '16px' }}
              mt={{ base: '2' }}
            >
              (Not my best pun, but you get it.)
            </Text>
          </GridItem>
          <GridItem rowSpan={{ base: 1, lg: 2 }}>
            <Box
              bgColor='blackAlpha.500'
              height={{ base: '500px', lg: '80vh' }}
            >
              <Text color={'white'}>Map</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box bgColor='blackAlpha.900'>
              <Grid gridAutoColumns={'auto'} gap='4'>
                <GridItem color={'white'} width='100%' colSpan={2}>
                  Post
                </GridItem>
                <GridItem
                  colSpan={{ base: 2, md: 1 }}
                  width={{ base: '100%' }}
                  height='300px'
                  backgroundColor={'white'}
                ></GridItem>
                <GridItem
                  colSpan={{ base: 2, md: 1 }}
                  width={{ base: '100%' }}
                  height='300px'
                  backgroundColor={'white'}
                ></GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}

export default App;
