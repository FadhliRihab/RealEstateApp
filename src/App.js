import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Register/Login";
import LandingPage from "./Components/LandingPage";
import Properties from "./Components/Properties/Properties";
import { data } from "./Components/data";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<Login style={{ backgroundColor: "#131110" }} />}
        />
        <Route path="/properties" element={<Properties data={data} />}/>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
