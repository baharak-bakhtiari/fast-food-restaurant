import logo from "../../assets/images/logo.png";
import { BsFillCartFill, BsTelephoneFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between px-0">
        <div className="container d-flex justify-content-start px-0">
          <a className="nav-link" href="#cart">
            <BsFillCartFill className="nav-icons fs-lg" />
            سبد خرید
          </a>
          <a className="nav-link" href="#menu">
            <MdRestaurantMenu className="nav-icons fs-lg" />
            منو
          </a>
          <a className="nav-link" href="tel:410-602-5008">
            <BsTelephoneFill className="nav-icons fs-lg" />
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
