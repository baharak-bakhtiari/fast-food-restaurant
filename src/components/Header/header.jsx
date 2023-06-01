import { useState } from "react";
import { BsFillCartFill, BsTelephoneFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { useAppContext } from "../../context";

const Header = () => {
  const { cart } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar ${isMenuOpen ? "menu-open" : ""}`}
      dir="rtl"
    >
      <div className="container position-relative">
        <Navbar.Toggle aria-controls="navbarNav" onClick={handleMenuToggle} />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link id="navitem" as={Link} to="/">
              <MdRestaurantMenu className="nav-icons fs-lg" />
              منو
            </Nav.Link>
            <Nav.Link id="navitem" as={Link} to="/Cart">
              <span className="cart-label badge badge-warning rounded-circle">
                {cart.length}
              </span>
              <BsFillCartFill className="navbar-tool-icon" />
              سبد خرید
            </Nav.Link>
            <Nav.Link id="navitem" href="tel:410-602-5008">
              <BsTelephoneFill className="nav-icons fs-lg" />
              تماس با ما
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img src={logo} className="img-fluid logo" alt="logo" />
      </div>
    </Navbar>
  );
};

export default Header;
