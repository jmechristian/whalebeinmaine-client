import { createSlice } from '@reduxjs/toolkit';

export const pinSlice = createSlice({
  name: 'pins',
  initialState: {
    lastLocation: null,
    lastSession: null,
    allSessions: null,
  },
  reducers: {
    setLastLocation: (state, action) => {
      state.lastLocation = action.payload;
    },
    setLastSession: (state, action) => {
      state.lastSession = action.payload;
    },
  },
});

export const { setLastLocation, setLastSession } = pinSlice.actions;

export default pinSlice.reducer;
