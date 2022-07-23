import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import store from './data/store';
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
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);
