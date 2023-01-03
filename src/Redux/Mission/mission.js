import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const missions = [];
let missionState;

const GET_MISSIONS = 'SPACETRAVELLERSHUB/MISSION/GET_MISSIONS';
const GET_MISSIONS_SUCCESS = 'SPACETRAVELLERSHUB/MISSION/GET_MISSIONS_SUCCESS';
const MISSION_JOINED = 'SPACETRAVELLERSHUB/MISSION/MISSION_JOINED';

const getMissionsSuccess = (missions) => ({
  type: GET_MISSIONS_SUCCESS,
  payload: missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    join: false,
  })),
});

export const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async (_, thunk) => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    thunk.dispatch(getMissionsSuccess(response.data));
  },
);

export const joinMission = (missionId) => (
  {
    type: MISSION_JOINED,
    mission_id: missionId,
  });

const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return [...action.payload];
    case MISSION_JOINED:
      missionState = state.map((mission) => {
        if (mission.mission_id !== action.mission_id) { return mission; }
        return { ...mission, join: !mission.join };
      });
      return missionState;

    default:
      return state;
  }
};

export default missionsReducer;
