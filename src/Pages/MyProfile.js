import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const joinedMissions = useSelector((state) => state.missions).filter((missions) => missions.join);
  return (
    <div className="profile">
      <div className="myContainer">
        <div className="heading">My Missions</div>
        <ul className="profileList">
          {joinedMissions.length > 0 ? (joinedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          )))
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
