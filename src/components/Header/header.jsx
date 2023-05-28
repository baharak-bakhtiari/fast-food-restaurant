import logo from "../../assets/images/logo.png";
import { BsFillCartFill, BsTelephoneFill } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import "./header.css";
import { useAppContext } from "../../context";

const Header = () => {
  const { cart } = useAppContext();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between px-0">
        <div className="container d-flex justify-content-start px-0">
          <Link className="nav-link" to="/">
            <MdRestaurantMenu className="nav-icons fs-lg" />
            منو
          </Link>
          <Link className="nav-link navbar-tool" to="/Cart">
            <span className="navbar-tool-label bg-warning rounded-circle">
              {cart.length}
            </span>
            <BsFillCartFill className="navbar-tool-icon" />
            سبد خرید
          </Link>
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
