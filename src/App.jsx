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
    <Box bgColor={'brand.800'} width='100vw' height={'100%'}>
      <Flex width={'100%'} height='100%' px={{ base: '0', lg: '8' }}>
        <Grid
          templateColumns={'repeat(12, 1fr)'}
          width={'100%'}
          bgColor={'brand.800'}
        >
          <GridItem colSpan={{ base: 12, lg: 6 }}>
            <VStack alignItems={'center'} my={{ base: '8', md: '8', lg: '4' }}>
              <VStack pt={{ base: '0', lg: 10 }}>
                <Text
                  fontSize={{ base: '72px', lg: '100px' }}
                  fontFamily='brand'
                  fontWeight={'black'}
                  color='brand.900'
                  fontStyle={'italic'}
                  lineHeight='1'
                >
                  Whale Be
                </Text>
                <Text
                  fontSize={{ base: '72px', lg: '100px' }}
                  fontFamily='brand'
                  fontWeight={'black'}
                  color='white'
                  fontStyle={'italic'}
                  lineHeight='0.6'
                >
                  In Maine!
                </Text>
                <Text
                  color={'white'}
                  fontFamily='brand'
                  fontSize={{ base: '20px' }}
                  letterSpacing='wide'
                  pt='6'
                  lineHeight={'0'}
                >
                  (Not my best pun, but you get it.)
                </Text>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem
            colSpan={{ base: '12', lg: '6' }}
            rowSpan={{ base: 1, lg: 2 }}
            py={{ base: '0', lg: 14 }}
          >
            <Box
              width={'80%'}
              bgColor='gray.400'
              height={{ base: '420px', lg: '100%' }}
              margin='0 auto'
              position={'relative'}
            >
              <Box
                position={'absolute'}
                left='10px'
                top='10px'
                bgColor={'brand.900'}
              >
                <Text color={'white'} fontWeight='bold' py='1' px='4'>
                  LIVE &bull;
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 12, lg: 6 }}
            marginTop={{ base: '0', lg: '10' }}
          >
            <Box
              margin={'16px auto'}
              textAlign='center'
              borderTop={'1px'}
              borderBottom='1px'
              borderColor={'white'}
              width={'80%'}
            >
              <Text
                fontWeight={'bold'}
                letterSpacing='6px'
                color={'white'}
                py='2'
              >
                LATEST POSTS
              </Text>
            </Box>
            <Flex
              mt={{ base: '4', md: '6' }}
              width={'100%'}
              direction={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'center', md: 'center' }}
              alignItems={{ base: 'center', md: 'center' }}
            >
              <Box
                w={{ base: '80%', md: '40%' }}
                h={{ base: '300px', lg: '175px' }}
                bgColor={'gray.400'}
                margin={{ base: '16px auto', md: '0 6px' }}
              ></Box>
              <Box
                w={{ base: '80%', md: '40%' }}
                h={{ base: '300px', lg: '175px' }}
                bgColor={'gray.400'}
                margin={{ base: '0', md: '0 6px' }}
              ></Box>
            </Flex>
            <Box
              width='100%'
              textAlign={'center'}
              mt={{ base: '4', lg: '8' }}
              mb={{ base: '8', lg: '0' }}
            >
              <Text
                fontWeight={'bold'}
                letterSpacing='4px'
                color={{ base: 'brand.800', lg: 'brand.700' }}
              >
                SEE ALL POSTS &rarr;
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}

export default App;
