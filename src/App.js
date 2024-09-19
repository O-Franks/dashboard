import "./App.css";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" className="background" element={<Home />} />
        <Route path="/overview" className="background" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
