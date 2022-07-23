import { createSlice } from '@reduxjs/toolkit';

export const markerSlice = createSlice({
  name: 'markers',
  initialState: {
    markers: null,
  },
  reducers: {
    setMarkers: (state, action) => {
      state.markers = action.payload;
    },
  },
});

export const { setMarkers } = markerSlice.actions;

export default markerSlice.reducer;
