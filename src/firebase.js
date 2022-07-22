// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB8pbyRY4ZpeThJY4y1OwrKDC631kGJFiI',
  authDomain: 'maine-fe60f.firebaseapp.com',
  databaseURL: 'https://maine-fe60f-default-rtdb.firebaseio.com',
  projectId: 'maine-fe60f',
  storageBucket: 'maine-fe60f.appspot.com',
  messagingSenderId: '597881893189',
  appId: '1:597881893189:web:a2c34f041ad2baa6190e2c',
  measurementId: 'G-HZT1LTC7R8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
export const storage = getStorage(app);
