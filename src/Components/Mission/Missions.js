import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../Redux/Mission/mission';
import './mission.css';

const Mission = ({
  name, description, index, join, keyValue,
}) => {
  const dispatch = useDispatch();
  const odds = index % 2;
  const styles = {
    backgroundColor: odds ? 'rgb(182, 180, 180, 0.5)' : '#ffffff',
  };
  return (
    <div className="mission">
      <div className="mission-details" style={styles}>
        <div className="mission-name">{name}</div>
        <div className="mission-description">{description}</div>
        <div className="mission-status-container">
          {join
            ? (<span className="mission-status-Active">Active Member</span>)
            : (<span className="mission-status">NOT A MEMBER</span>) }
        </div>
        <div className="mission-button">
          {join
            ? (
              <button type="button" className="leaveMission" onClick={() => dispatch(joinMission(keyValue))}>
                Leave Mission
              </button>
            )
            : (
              <button type="button" className="joinMission" onClick={() => dispatch(joinMission(keyValue))}>
                Join Mission
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  join: PropTypes.bool.isRequired,
  keyValue: PropTypes.string.isRequired,
};
export default Mission;
