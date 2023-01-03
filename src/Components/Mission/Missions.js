import React from 'react';
import PropTypes from 'prop-types';
import './mission.css';

const Mission = ({
  name, description, status,
}) => (
  <div className="mission">
    <div className="mission-details">
      <div className="mission-name">{name}</div>
      <div className="mission-description">{description}</div>
      <div className="mission-status">{status}</div>
      <div className="mission-button">
        <button type="button">Join Mission</button>
      </div>
    </div>
  </div>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
export default Mission;
