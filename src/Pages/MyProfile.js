import React from 'react';
import './MyProfile.css';

const MyProfile = () => (
  <div className="profile">
    <div className="myContainer">
      <div className="heading">My Missions</div>
      <ul className="profileList">
        <li>Mission 1</li>
        <li>Mission 2</li>
        <li>Mission 3</li>
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

export default MyProfile;
