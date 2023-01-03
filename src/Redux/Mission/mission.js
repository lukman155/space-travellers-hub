import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const missions = [];

const GET_MISSIONS = 'SPACETRAVELLERSHUB/MISSION/GET_MISSIONS';
const GET_MISSIONS_SUCCESS = 'SPACETRAVELLERSHUB/MISSION/GET_MISSIONS_SUCCESS';

const getMissionsSuccess = (missions) => ({
  type: GET_MISSIONS_SUCCESS,
  payload: missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  })),
});

export const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async (_, thunk) => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    thunk.dispatch(getMissionsSuccess(response.data));
  },
);

const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
