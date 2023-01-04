import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../Redux/Mission/mission';
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
          <li>Rocket 1</li>
          <li>Rocket 2</li>
          <li>Rocket 3</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
