import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../Components/Mission/Missions';
import './mission.css';

const Missions = () => {
  const missionList = useSelector((state) => state.missions);
  return (
    <div className="mission-container">
      <ul className="mission-heading">
        <li>Mission</li>
        <li className="description">Description</li>
        <li>Status</li>
        <li />
      </ul>
      <div className="missionList">
        {missionList.map((mission) => (

          <Mission
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            status="Not a member"
          />
        ))}
      </div>
    </div>
  );
};

export default Missions;
