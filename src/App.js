// import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./compoents/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import UserNotFound from "./compoents/NotFound/UserNotFound";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/user-not-found" element={<UserNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
