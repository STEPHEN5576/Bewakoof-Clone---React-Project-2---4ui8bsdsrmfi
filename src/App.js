// import Home from "./Pages/Home";
import Navabar from "./components/Home/Navabar";
import "./styles/App.css";
import {Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="App">
      <Navabar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
