import { HiShoppingCart } from "react-icons/hi";

const MenuItem = ({ name, price, ingredients, imageUrl }) => {
  return (
    <div className="card product-card h-100 border-0 shadow-sm pb-1">
      <span className="badge badge-end badge-shadow bg-warning fs-md fw-medium">
        {price.toLocaleString()} تومان
      </span>
      <img className="card-img-top" src={imageUrl} alt="menuItem" />
      <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
        <div>{name}</div>
        <div className="fs-ms fw-bold text-muted mb-3">{ingredients}</div>
        <button className="btn btn-outline-warning btn-sm w-100 mt-auto fw-bold">
          <HiShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
