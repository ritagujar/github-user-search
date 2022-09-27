// import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./compoents/Footer/Footer";
import Navbar from "./compoents/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

// export const UserContext = createContext();

function App() {
  // const [username, setUsername] = useState("");
  return (
    <>
      <Navbar />
      {/* <UserContext.Provider value={(username, setUsername)}> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </div>
      {/* </UserContext.Provider> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
