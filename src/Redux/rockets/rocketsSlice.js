import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const rockets = [];
let rocketState;

const GET_ROCKETS = 'SPACETRAVELLERSHUB/ROCKETS/GET_ROCKETS';
const GET_ROCKETS_SUCCESS = 'SPACETRAVELLERSHUB/ROCKETS/GET_ROCKETS_SUCCESS';
const TOGGLE_RESERVE = 'SPACETRAVELLERSHUB/ROCKETS/ROCKET_RESERVED';

const getRocketsSuccess = (rockets) => ({
  type: GET_ROCKETS_SUCCESS,
  payload: rockets.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
    reserved: false,
    wikipedia: rocket.wikipedia,
  })),
});

export const getRockets = createAsyncThunk(
  GET_ROCKETS,
  async (_, thunk) => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    thunk.dispatch(getRocketsSuccess(response.data));
  },
);

export const toggleReserve = (id) => (
  {
    type: TOGGLE_RESERVE,
    id,
  });

const rocketsReducer = (state = rockets, action) => {
  switch (action.type) {
    case GET_ROCKETS_SUCCESS:
      return [...action.payload];
    case TOGGLE_RESERVE:
      rocketState = state.map((rocket) => {
        if (rocket.id !== action.id) { return rocket; }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return rocketState;

    default:
      return state;
  }
};

export default rocketsReducer;
