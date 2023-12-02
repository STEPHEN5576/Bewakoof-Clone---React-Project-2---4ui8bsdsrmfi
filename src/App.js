// import Home from "./Pages/Home";
import Navabar from "./components/Home/Navabar";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Catagories from "./Pages/Catagories";
import Footer from "./components/Home/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navabar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Catagories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
