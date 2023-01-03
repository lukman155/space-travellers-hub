import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Missions from './Pages/Missions';
import MyProfile from './Pages/MyProfile';
import Rockets from './Pages/Rockets';
import NavBar from './Components/NavBar';
import './App.css';
import { getMissions } from './Redux/Mission/mission';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getMissions());
  return (
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
};

export default App;
