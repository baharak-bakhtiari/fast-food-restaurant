import logo from "../../assets/images/logo.png"
import { BsFillCartFill, BsTelephoneFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between">
        <div className="container d-flex justify-content-start">
          <a className="nav-link" href="#cart">
            <BsFillCartFill />
            <br />
            سبد خرید
          </a>
          <a className="nav-link" href="#menu">
            <MdRestaurantMenu />
            <br />
            منو
          </a>
          <a className="nav-link" href="tel:410-602-5008">
            <BsTelephoneFill />
            <br />
            تماس با ما
          </a>
        </div>
        <div>
          <img src={logo} className="img-fluid logo" alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
