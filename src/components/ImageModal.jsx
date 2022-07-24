import React from 'react';
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
import { useSelector } from 'react-redux';

const ImageModal = ({ openImage, imageIndex, closeImage }) => {
  const { urls } = useSelector((state) => state.markers);

  return (
    <Modal
      isOpen={openImage}
      onClose={closeImage}
      blockScrollOnMount={false}
      size='2xl'
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          {urls ? (
            <Box maxWidth='80%'>
              <Image width={'100%'} height='100%' src={urls[imageIndex]} />
            </Box>
          ) : (
            'loading'
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
