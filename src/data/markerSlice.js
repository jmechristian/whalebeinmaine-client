import { createSlice } from '@reduxjs/toolkit';

export const markerSlice = createSlice({
  name: 'markers',
  initialState: {
    markers: null,
    urls: null,
  },
  reducers: {
    setMarkers: (state, action) => {
      state.markers = action.payload;
    },
    setUrls: (state, action) => {
      state.urls = action.payload;
    },
  },
});

export const { setMarkers, setUrls } = markerSlice.actions;

export default markerSlice.reducer;
