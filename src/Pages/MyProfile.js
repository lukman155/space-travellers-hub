import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../Redux/Mission/mission';
import { toggleReserve } from '../Redux/rockets/rocketsSlice';
import './MyProfile.css';

const MyProfile = () => {
  const dispatch = useDispatch();
  const joinedMissions = useSelector((state) => state.missions).filter((missions) => missions.join);
  const joinedMission = joinedMissions.map((mission) => (
    <li key={mission.mission_id}>
      <a
        href={mission.wikipedia}
        target="_blank"
        rel="noreferrer"
      >
        {mission.mission_name}
      </a>

      <button
        type="button"
        className="leaveMissionButton"
        onClick={() => dispatch(joinMission(mission.mission_id))}
      >
        Leave Mission
      </button>

    </li>
  ));

  const reservedRockets = useSelector((state) => (
    state.rockets).filter((rockets) => rockets.reserved));
  const reservedRocket = reservedRockets.map((rocket) => (
    <li key={rocket.rocket_id}>
      <a
        href={rocket.wikipedia}
        target="_blank"
        rel="noreferrer"
      >
        {rocket.rocket_name}
      </a>

      <button
        type="button"
        className="leaveMissionButton"
        onClick={() => dispatch(toggleReserve(rocket.id))}
      >
        Cancel Reservation
      </button>

    </li>

  ));
  return (
    <div className="profile">
      <div className="myContainer">
        <div className="heading">My Missions</div>
        <ul className="profileList">
          {joinedMissions.length > 0 ? (joinedMission)
            : (<p>No Missions Joined</p>)}
        </ul>
      </div>
      <div className="myContainer">
        <div className="heading">My Rockets</div>
        <ul className="profileList">
          {reservedRockets.length > 0 ? (reservedRocket)
            : (<p>No Rockets Reserved</p>)}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
