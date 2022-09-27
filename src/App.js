// import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./compoents/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
