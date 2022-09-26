import { Route, Routes } from "react-router-dom";
import Footer from "./compoents/Footer/Footer";
import Navbar from "./compoents/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
