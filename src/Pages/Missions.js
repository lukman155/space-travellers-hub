import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from '../Components/Mission/Missions';
import './mission.css';
import { getMissions } from '../Redux/Mission/mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);
  useEffect(() => {
    if (missionList.length) {
      return;
    }
    dispatch(getMissions());
  }, [dispatch, missionList.length]);
  return (
    <div className="mission-container">
      <ul className="mission-heading">
        <li>Mission</li>
        <li className="description">Description</li>
        <li>Status</li>
        <li />
      </ul>
      <div className="missionList">
        {missionList.map((mission, index) => (

          <Mission
            index={index}
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            join={mission.join}
            keyValue={mission.mission_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Missions;
