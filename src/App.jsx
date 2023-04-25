import LandingPage from "./landingPage/landingPage";
import Menu from "./Menu/menu";
import Header from "./Header/header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <LandingPage />
      <Menu />
    </div>
  );
}

export default App;
