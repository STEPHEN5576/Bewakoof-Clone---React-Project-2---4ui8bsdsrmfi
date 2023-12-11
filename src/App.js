// import Home from "./Pages/Home";
import Navabar from "./components/Home/Navabar";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Catagories from "./Pages/Catagories";
import Footer from "./components/Home/Footer/Footer";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Product from "./Pages/Product";
import RequiredAuth from "./components/Authentication/RequiredAuth";
import Cart from "./Pages/Cart";
import SearchResults from "./Pages/SearchResults";
function App() {
  return (
    <div className="App">
      <Navabar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Catagories />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />

        <Route path="/Product/:_id" element={<Product />} />
        <Route path="/search/:inputValue" element={<SearchResults />} />
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
