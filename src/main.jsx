import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './globals.css';

const colors = {
  brand: {
    900: '#D90D32',
    800: '#1E1D40',
    700: '#F2E6D2',
  },
};

const fonts = {
  brand: 'skolar-latin, serif;',
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
