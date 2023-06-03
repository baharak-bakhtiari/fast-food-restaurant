import { HiShoppingCart } from "react-icons/hi";
import PropTypes from "prop-types";
import { useAppContext } from "../../context";
import "./menuItem.css";

const MenuItem = ({ menuItem }) => {
  const { addToCart } = useAppContext();
  const handleAddToCart = () => {
    addToCart({ menuItem });
  };

  return (
    <div className="card product-card h-100 border-0 shadow-sm pb-1">
      <span
        className="badge badge-end badge-shadow fs-md fw-medium"
        style={{ "background-color": "orange" }}
      >
        {menuItem.price.toLocaleString()} تومان
      </span>
      <img className="card-img-top" src={menuItem.imageUrl} alt="menuItem" />
      <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
        <div>{menuItem.name}</div>
        <div className="fs-ms fw-bold text-muted mb-3">
          {menuItem.ingredients}
        </div>
        <button
          onClick={handleAddToCart}
          className="btn btn-border btn-sm w-100 mt-auto fw-bold add-to-cart"
          style={{ color: "orange", borderColor: "orange" }}
        >
          <HiShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
};

export default MenuItem;
