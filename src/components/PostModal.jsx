import React, { useState } from 'react';
import {
  Box,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  GridItem,
  Image,
  Text,
  Center,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ImageModal from './ImageModal';

const PostModal = ({ openModal, closeModal, images }) => {
  const [imageIsOpen, setImageIsOpen] = useState(false);
  const [isImageIndex, setIsImageIndex] = useState(0);

  const imageToOpen = (imgIndex) => {
    setIsImageIndex(imgIndex);
    setImageIsOpen(true);
  };

  return (
    <>
      <Modal isOpen={openModal} onClose={closeModal} size={'full'}>
        <ModalOverlay />
        <ModalContent backgroundColor={'black'}>
          <ModalHeader>
            <Text fontSize={'4xl'} textColor='white'>
              All The Posts
            </Text>
          </ModalHeader>
          <ModalCloseButton size={'lg'} color='white' />
          <ModalBody>
            <Box width='100%' height='100%' p='8'>
              <Center>
                <Grid
                  width={'90%'}
                  gridTemplateColumns={{
                    md: 'repeat(auto-fill, minmax(24%, 1fr))',
                    lg: 'repeat(auto-fill, minmax(20%, 1fr))',
                    xl: 'repeat(auto-fill, minmax(13%, 1fr))',
                  }}
                  gridAutoRows={'auto'}
                  gap={'8'}
                >
                  {images
                    ? images.map((im, index) => (
                        <GridItem
                          key={index}
                          height={{ base: '150px', md: '175px' }}
                        >
                          <Box height={'100%'} position='relative'>
                            <Image
                              src={im}
                              objectFit='cover'
                              objectPosition='middle'
                              width='100%'
                              height='100%'
                            />
                            <Center
                              position='absolute'
                              left='5px'
                              bottom='5px'
                              width='30px'
                              height='30px'
                              borderRadius={'50%'}
                              backgroundColor='white'
                              opacity={'0.7'}
                              z-index='30'
                              onClick={() => imageToOpen(index)}
                            >
                              <AddIcon w='3' h='3' color={'black'} />
                            </Center>
                          </Box>
                        </GridItem>
                      ))
                    : ''}
                </Grid>
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ImageModal
        openImage={imageIsOpen}
        closeImage={() => setImageIsOpen(false)}
        imageIndex={isImageIndex}
      />
    </>
  );
};

export default PostModal;
