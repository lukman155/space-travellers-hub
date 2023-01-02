import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './Components/Missions';
import MyProfile from './Components/MyProfile';
import Rockets from './Components/Rockets';
import NavBar from './Components/NavBar';
import './App.css';

const App = () => (
  <div className="container">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="rockets" element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="myprofile" element={<MyProfile />} />
    </Routes>
  </div>
);

export default App;
