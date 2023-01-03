import React from 'react';
import PropTypes from 'prop-types';
import './mission.css';

const Mission = ({
  name, description, status, index,
}) => {
  const odds = index % 2;
  const styles = {
    backgroundColor: odds ? 'rgb(182, 180, 180, 0.5)' : '#ffffff',
  };
  return (
    <div className="mission">
      <div className="mission-details" style={styles}>
        <div className="mission-name">{name}</div>
        <div className="mission-description">{description}</div>
        <div className="mission-status">{status}</div>
        <div className="mission-button">
          <button type="button">Join Mission</button>
        </div>
      </div>
    </div>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default Mission;
