import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage/cartPage";
import LandingPage from "./components/LandingPage/landingPage";
import Header from "./components/Header/header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
