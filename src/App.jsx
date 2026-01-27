import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import DmainPage from "./Pages/DmainPage";
import './index.css';
import Footer from "./Components/Common/Footer";
import WorldPress from "./Pages/WorldPress";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DmainPage />} />
        <Route path="/domains" element={<DmainPage />} />
        <Route path="/wordpress" element={<WorldPress />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
