/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'spacetravellershub/rockets/fetchRockets';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  return response.json();
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = state.rockets.concat(action.payload);
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;

export const selectAllRockets = (state) => state.rockets.rockets;
