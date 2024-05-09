import './App.css';
import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Contact from './components/contact/Contact';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./constants";
import { useCallbackState } from './components/globalContext';


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const { setDevices } = useCallbackState();

  const getDevices = () => {
    axios.get(API_URL).then(res => setDevices(res.data));
  };

  const resetState = () => {
    getDevices();
  };

  useEffect(() => {
    resetState();
  }, []);
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route path="/" element={ <Cards /> } />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {showMenu && <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
