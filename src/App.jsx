import LandingPage from "./components/LandingPage/landingPage";
import Menu from "./components/Menu/menu";
import Header from "./components/Header/header";
import Comments from "./components/Comments/comments";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <LandingPage />
      <Menu />
      <Comments />
    </div>
  );
}

export default App;
